package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/orshemtov/offers-system/server/pkg/model"
)

func GetItems(c *gin.Context) {
	var items []model.Item
	DB.Find(&items)
	c.JSON(http.StatusOK, gin.H{
		"items": items,
	})
}

func DeleteItem(c *gin.Context) {
	id := c.Param("itemId")
	DB.Delete(&model.Item{}, id)
	c.Status(http.StatusNoContent)
}

func GetItem(c *gin.Context) {
	id := c.Param("itemId")
	item := DB.Find(model.Item{}, id)
	c.JSON(http.StatusOK, gin.H{
		"item": item,
	})
}

func UpdateItem(c *gin.Context) {
	id := c.Param("itemId")
	var item model.Item
	DB.Find(&item, id)

	var updatedItem model.Item
	c.BindJSON(&updatedItem)

	item.Name = updatedItem.Name
	item.Description = updatedItem.Description
	item.Price = updatedItem.Price
	item.Image = updatedItem.Image

	DB.Save(&item)

	c.JSON(http.StatusCreated, gin.H{
		"updated": item,
	})
}

func CreateItem(c *gin.Context) {
	var item model.Item
	c.BindJSON(&item)
	DB.Create(&item)
	c.JSON(http.StatusOK, gin.H{
		"created": item,
	})
}
