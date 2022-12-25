package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type Product struct {
	gorm.Model
	Name        string  `json:"name"`
	Make        string  `json:"make"`
	Section     string  `json:"section"`
	Description string  `json:"description"`
	Price       float64 `json:"price"`
	Image       string  `json:"image"`
}

var productService ProductService

func GetProducts(c *gin.Context) {
	products, _ := productService.GetAll()
	c.JSON(http.StatusOK, products)
}

func GetProductsBySection(c *gin.Context) {
	products, _ := productService.GetAllBySection()
	c.JSON(http.StatusOK, products)
}

func GetProduct(c *gin.Context) {
	id := c.Param("id")
	product, _ := productService.Get(id)
	c.JSON(http.StatusOK, product)
}

func CreateProduct(c *gin.Context) {
	var product Product
	err := c.BindJSON(&product)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
	}
	newProduct, _ := productService.Create(product)
	c.JSON(http.StatusCreated, newProduct)
}

func CreateProducts(c *gin.Context) {
	var products []Product
	err := c.BindJSON(&products)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
	}
	newProduct, _ := productService.CreateBulk(products)
	c.JSON(http.StatusCreated, newProduct)
}

func UpdateProduct(c *gin.Context) {
	id := c.Param("id")
	var product Product
	err := c.BindJSON(&product)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
	}
	updatedProduct, _ := productService.Update(id, product)
	c.JSON(http.StatusCreated, updatedProduct)
}

func DeleteProduct(c *gin.Context) {
	id := c.Param("id")
	_ = productService.Delete(id)
	c.String(http.StatusNoContent, "Item has been deleted")
}

type ProductService struct{}

func (s *ProductService) GetAll() ([]Product, error) {
	var products []Product
	result := DB.Find(&products)
	if result.Error != nil {
		return nil, result.Error
	}

	return products, nil
}

func (s *ProductService) Get(id string) (Product, error) {
	var product Product
	result := DB.First(&product, id)
	if result.Error != nil {
		return Product{}, result.Error
	}

	return product, nil
}

func (s *ProductService) Create(product Product) (Product, error) {
	result := DB.Create(&product)
	if result.Error != nil {
		return Product{}, result.Error
	}

	return product, nil
}

func (s *ProductService) CreateBulk(products []Product) ([]Product, error) {
	result := DB.Create(products)
	if result.Error != nil {
		return nil, result.Error
	}

	return products, nil
}

func (s *ProductService) Update(id string, updatedProduct Product) (Product, error) {
	var product Product
	result := DB.Find(&product, id)
	if result.Error != nil {
		return Product{}, result.Error
	}

	product.Name = updatedProduct.Name
	product.Make = updatedProduct.Make
	product.Description = updatedProduct.Description
	product.Price = updatedProduct.Price
	product.Image = updatedProduct.Image

	result = DB.Save(product)
	if result.Error != nil {
		return Product{}, result.Error
	}

	return product, nil
}

func (s *ProductService) Delete(id string) error {
	var product Product
	result := DB.First(&product, id)
	if result.Error != nil {
		return result.Error
	}

	result = DB.Delete(&product)
	if result.Error != nil {
		return result.Error
	}

	return nil
}

func (s *ProductService) GetAllBySection() (map[string][]Product, error) {
	products, err := s.GetAll()
	if err != nil {
		return nil, err
	}
	result := make(map[string][]Product)

	for _, product := range products {
		if product.Section != "" {
			k := product.Section

			if v, ok := result[k]; ok {
				v = append(v, product)
			}

			result[k] = []Product{product}
		}
	}

	return result, nil
}
