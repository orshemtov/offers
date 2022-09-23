package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/orshemtov/offers-system/server/pkg/model"
)

func CreateItem(c *gin.Context) {
	var item model.Item
	c.BindJSON(&item)
	model.DB.Create(&item)
	c.JSON(http.StatusOK, gin.H{
		"created": item,
	})
}

func GetItem(c *gin.Context) {
	id := c.Param("itemId")
	item := model.DB.Find(model.Item{}, id)
	c.JSON(http.StatusOK, gin.H{
		"item": item,
	})
}

func GetItems(c *gin.Context) {
	var items []model.Item
	model.DB.Find(&items)
	c.JSON(http.StatusOK, gin.H{
		"items": items,
	})
}

func UpdateItem(c *gin.Context) {
	id := c.Param("itemId")
	var item model.Item
	model.DB.Find(&item, id)

	var updatedItem model.Item
	c.BindJSON(&updatedItem)

	item.Name = updatedItem.Name
	item.Description = updatedItem.Description
	item.Price = updatedItem.Price
	item.Image = updatedItem.Image

	model.DB.Save(&item)

	c.JSON(http.StatusCreated, gin.H{
		"updated": item,
	})
}

func DeleteItem(c *gin.Context) {
	id := c.Param("itemId")
	model.DB.Delete(&model.Item{}, id)
	c.Status(http.StatusNoContent)
}
