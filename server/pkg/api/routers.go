package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/orshemtov/offers-system/server/pkg/model"
)

type Route struct {
	Name        string
	Method      string
	Pattern     string
	HandlerFunc gin.HandlerFunc
}

type Routes []Route

func NewRouter() *gin.Engine {
	router := gin.Default()
	for _, route := range routes {
		switch route.Method {
		case http.MethodGet:
			router.GET(route.Pattern, route.HandlerFunc)
		case http.MethodPost:
			router.POST(route.Pattern, route.HandlerFunc)
		case http.MethodPut:
			router.PUT(route.Pattern, route.HandlerFunc)
		case http.MethodPatch:
			router.PATCH(route.Pattern, route.HandlerFunc)
		case http.MethodDelete:
			router.DELETE(route.Pattern, route.HandlerFunc)
		}
	}

	return router
}

var routes = Routes{
	{
		"UploadImage",
		http.MethodPost,
		"/api/v1/images",
		UploadImage,
	},
	{
		"GetItems",
		http.MethodGet,
		"/api/v1/items",
		GetItems,
	},

	{
		"DeleteItem",
		http.MethodDelete,
		"/api/v1/items/:itemId",
		DeleteItem,
	},

	{
		"GetItem",
		http.MethodGet,
		"/api/v1/items/:itemId",
		GetItem,
	},

	{
		"UpdateItem",
		http.MethodPut,
		"/api/v1/items/:itemId",
		UpdateItem,
	},
	{
		"CreateItem",
		http.MethodPost,
		"/api/v1/items",
		CreateItem,
	},
	{
		"GetOffers",
		http.MethodGet,
		"/api/v1/offers",
		GetOffers,
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

	offer.Logo = updatedOffer.Logo
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

func UploadImage(c *gin.Context) {
	panic("Not implemented")
}
