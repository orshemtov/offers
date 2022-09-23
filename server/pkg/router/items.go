package router

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetItem(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{})
}

func GetAllItems(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{})
}

func CreateItem(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{})
}

func UpdateItem(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{})
}

func DeleteItem(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{})
}

var itemRoutes = Routes{
	{
		"GetItem",
		http.MethodGet,
		"/api/v1/items/:itemId",
		GetItem,
	},
	{
		"GetItems",
		http.MethodGet,
		"/api/v1/items",
		GetAllItems,
	},
	{
		"CreateItem",
		http.MethodPost,
		"/api/v1/items",
		CreateItem,
	},
	{
		"UpdateItem",
		http.MethodPut,
		"/api/v1/items/:itemId",
		UpdateItem,
	},

	{
		"DeleteItem",
		http.MethodDelete,
		"/api/v1/items/:itemId",
		DeleteItem,
	},
}
