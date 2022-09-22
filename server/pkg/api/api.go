package api

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/orshemtov/offers-system/server/pkg/model"
	"gorm.io/gorm"
)

var db *gorm.DB

func ImagesPost(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{})
}

func ItemsGet(c *gin.Context) {
	var items []model.Item
	result := db.Find(&items)
	fmt.Println(result)
	c.JSON(http.StatusOK, gin.H{
		"items": items,
	})
}

func ItemsItemIdDelete(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{})
}

func ItemsItemIdGet(c *gin.Context) {
	var item []model.Item
	result := db.Find(&item)
	fmt.Println(result)
	c.JSON(http.StatusOK, gin.H{
		"item": item,
	})
}

func ItemsItemIdPut(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{})
}

func ItemsPost(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{})
}

func OffersGet(c *gin.Context) {
	var offers []model.Offer
	result := db.Find(&offers)
	fmt.Println(result)
	c.JSON(http.StatusOK, gin.H{
		"offers": offers,
	})
}

func OffersOfferIdGet(c *gin.Context) {
	var offer model.Offer
	result := db.First(&offer)
	fmt.Println(result)
	c.JSON(http.StatusOK, gin.H{
		"offer": offer,
	})
}

func OffersOfferIdPut(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{})
}

func OffersPost(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{})
}
