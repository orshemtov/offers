package router

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetOffer(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{})
}

func GetAllOffers(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{})
}

func CreateOffer(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{})
}

func UpdateOffer(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{})
}

func DeleteOffer(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{})
}

var offerRoutes = Routes{
	{
		"GetOffers",
		http.MethodGet,
		"/api/v1/offers",
		GetAllOffers,
	},
	{
		"GetOffer",
		http.MethodGet,
		"/api/v1/offers/:offerId",
		GetOffer,
	},
	{
		"UpdateOffer",
		http.MethodPut,
		"/api/v1/offers/:offerId",
		UpdateOffer,
	},
	{
		"CreateOffer",
		http.MethodPost,
		"/api/v1/offers",
		CreateOffer,
	},
	{
		"DeleteOffer",
		http.MethodDelete,
		"/api/v1/offers/:offerId",
		DeleteOffer,
	},
}
