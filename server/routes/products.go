package routes

import "github.com/orshemtov/offers/server/service"
import "github.com/orshemtov/offers/server/model"
import "github.com/gin-gonic/gin"
import "net/http"

var productService service.ProductService

func GetProducts(c *gin.Context) {
	clients := productService.GetAll()
	c.JSON(http.StatusOK, clients)
}

func GetProduct(c *gin.Context) {
	id := c.Param("id")
	client := productService.Get(id)
	c.JSON(http.StatusOK, client)
}

func CreateProduct(c *gin.Context) {
	var data model.Product
	if err := c.ShouldBindJSON(&data); err == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
	client := productService.Create(data)
	c.JSON(http.StatusCreated, client)
}

func UpdateProduct(c *gin.Context) {
	id := c.Param("id")
	var data model.Product
	if err := c.ShouldBindJSON(&data); err == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
	client := productService.Update(id, data)
	c.JSON(http.StatusCreated, client)
}

func DeleteProduct(c *gin.Context) {
	id := c.Param("id")
	productService.Delete(id)
	c.String(http.StatusNoContent, "Item has been deleted")
}
