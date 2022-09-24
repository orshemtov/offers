package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gookit/goutil/strutil"
	"github.com/orshemtov/offers-system/server/pkg/model"
)

func GetItem(c *gin.Context) {
	id := strutil.MustInt(c.Param("itemId"))
	item, err := model.GetItem(id)
	if err != nil {
		panic(err)
	}
	c.JSON(http.StatusOK, item)
}

func GetAllItems(c *gin.Context) {
	items, err := model.GetAllItems()
	if err != nil {
		panic(err)
	}
	c.JSON(http.StatusOK, items)
}

func CreateItem(c *gin.Context) {
	defer c.Request.Body.Close()
	var item model.Item
	c.BindJSON(&item)
	createdItem, err := model.CreateItem(item)
	if err != nil {
		panic(err)
	}
	c.JSON(http.StatusCreated, createdItem)
}

func UpdateItem(c *gin.Context) {
	defer c.Request.Body.Close()
	var item model.Item
	c.BindJSON(&item)
	updatedItem, err := model.UpdateItem(item)
	if err != nil {
		panic(err)
	}
	c.JSON(http.StatusCreated, updatedItem)
}

func DeleteItem(c *gin.Context) {
	id := strutil.MustInt(c.Param("itemId"))
	err := model.DeleteItem(id)
	if err != nil {
		panic(err)
	}
	c.Status(http.StatusNoContent)
}
