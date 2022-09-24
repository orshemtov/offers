package service

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gookit/goutil/strutil"
	"github.com/orshemtov/offers-system/server/pkg/model"
)

type OfferService struct{}

func (s *OfferService) Get(c *gin.Context) {
	id := strutil.MustInt(c.Param("offerId"))
	offer := model.GetOffer(id)
	c.JSON(http.StatusOK, offer)
}

func (s *OfferService) GetAll(c *gin.Context) {
	offers := model.GetAllOffers()
	c.JSON(http.StatusOK, offers)
}

func (s *OfferService) Create(c *gin.Context) {
	defer c.Request.Body.Close()
	var offer model.Offer
	_ = c.BindJSON(&offer)
	offer = model.CreateOffer(offer)
	c.JSON(http.StatusCreated, offer)
}

func (s *OfferService) Update(c *gin.Context) {
	c.JSON(http.StatusOK, &gin.H{})
}

func (s *OfferService) Delete(c *gin.Context) {
	c.JSON(http.StatusOK, &gin.H{})
}
