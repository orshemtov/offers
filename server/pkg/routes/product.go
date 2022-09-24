package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gookit/goutil/strutil"
	"github.com/orshemtov/offers-system/server/pkg/model"
)

func GetProduct(c *gin.Context) {
	id := strutil.MustInt(c.Param("itemId"))
	item, err := model.GetProduct(id)
	if err != nil {
		panic(err)
	}
	c.JSON(http.StatusOK, item)
}

func GetAllProducts(c *gin.Context) {
	items, err := model.GetAllProducts()
	if err != nil {
		panic(err)
	}
	c.JSON(http.StatusOK, items)
}

func CreateProduct(c *gin.Context) {
	defer c.Request.Body.Close()
	var item model.Product
	c.BindJSON(&item)
	createdProduct, err := model.CreateProduct(item)
	if err != nil {
		panic(err)
	}
	c.JSON(http.StatusCreated, createdProduct)
}

func UpdateProduct(c *gin.Context) {
	defer c.Request.Body.Close()
	var item model.Product
	c.BindJSON(&item)
	updatedProduct, err := model.UpdateProduct(item)
	if err != nil {
		panic(err)
	}
	c.JSON(http.StatusCreated, updatedProduct)
}

func DeleteProduct(c *gin.Context) {
	id := strutil.MustInt(c.Param("itemId"))
	err := model.DeleteProduct(id)
	if err != nil {
		panic(err)
	}
	c.Status(http.StatusNoContent)
}
