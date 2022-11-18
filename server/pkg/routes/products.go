package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/orshemtov/offers/server/pkg/model"
	"github.com/orshemtov/offers/server/pkg/service"
)

var productService service.ProductService

func GetProducts(c *gin.Context) {
	clients, _ := productService.GetAll()
	c.JSON(http.StatusOK, clients)
}

func GetProduct(c *gin.Context) {
	id := c.Param("id")
	client, _ := productService.Get(id)
	c.JSON(http.StatusOK, client)
}

func CreateProduct(c *gin.Context) {
	var product model.Product
	err := c.BindJSON(&product)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
	}
	newProduct, _ := productService.Create(product)
	c.JSON(http.StatusCreated, newProduct)
}

func UpdateProduct(c *gin.Context) {
	id := c.Param("id")
	var product model.Product
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
