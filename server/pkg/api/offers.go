package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/orshemtov/offers-system/server/pkg/model"
)

func CreateOffer(c *gin.Context) {
	var offer model.Offer
	c.BindJSON(&offer)
	model.DB.Create(&offer)
	c.JSON(http.StatusCreated, gin.H{
		"created": offer,
	})
}

func GetOffer(c *gin.Context) {
	id := c.Param("offerId")
	var offer model.Offer
	model.DB.Find(&offer, id)
	c.JSON(http.StatusOK, gin.H{
		"offer": offer,
	})
}

func GetOffers(c *gin.Context) {
	var offers []model.Offer
	model.DB.Find(&offers)
	c.JSON(http.StatusOK, gin.H{
		"offers": offers,
	})
}

func UpdateOffer(c *gin.Context) {
	var updatedOffer model.Offer
	c.BindJSON(&updatedOffer)

	var offer model.Offer
	id := c.Param("offerId")
	model.DB.Find(&offer, id)

	offer.From.Logo = updatedOffer.From.Logo
	offer.Date = updatedOffer.Date
	offer.To = updatedOffer.To
	offer.From = updatedOffer.From
	offer.Title = updatedOffer.Title
	offer.Content = updatedOffer.Content
	offer.Items = updatedOffer.Items

	c.JSON(http.StatusOK, gin.H{
		"updated": offer,
	})
}

func DeleteOffer(c *gin.Context) {
	id := c.Param("offerId")
	model.DB.Delete(&model.Offer{}, id)
	c.Status(http.StatusNoContent)
}
