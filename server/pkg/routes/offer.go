package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gookit/goutil/strutil"
	"github.com/orshemtov/offers-system/server/pkg/model"
)

func GetOffer(c *gin.Context) {
	id := strutil.MustInt(c.Param("offerId"))
	offer, err := model.GetOffer(id)
	if err != nil {
		panic(err)
	}
	c.JSON(http.StatusOK, offer)
}

func GetAllOffers(c *gin.Context) {
	offers, err := model.GetAllOffers()
	if err != nil {
		panic(err)
	}
	c.JSON(http.StatusOK, offers)
}

func CreateOffer(c *gin.Context) {
	defer c.Request.Body.Close()
	var offer model.Offer
	c.BindJSON(&offer)
	createdOffer, err := model.CreateOffer(offer)
	if err != nil {
		panic(err)
	}
	c.JSON(http.StatusCreated, createdOffer)
}

func UpdateOffer(c *gin.Context) {
	defer c.Request.Body.Close()
	var offer model.Offer
	c.BindJSON(&offer)
	updatedOffer, err := model.UpdateOffer(offer)
	if err != nil {
		panic(err)
	}
	c.JSON(http.StatusOK, updatedOffer)
}

func DeleteOffer(c *gin.Context) {
	id := strutil.MustInt(c.Param("offerId"))
	err := model.DeleteOffer(id)
	if err != nil {
		panic(err)
	}
	c.Status(http.StatusNoContent)
}
