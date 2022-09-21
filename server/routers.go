package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
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

func Index(c *gin.Context) {
	c.String(http.StatusOK, "Hello World!")
}

var routes = Routes{
	{
		"Index",
		http.MethodGet,
		"/api/v1/",
		Index,
	},

	{
		"ImagesPost",
		http.MethodPost,
		"/api/v1/images",
		ImagesPost,
	},

	{
		"ItemsGet",
		http.MethodGet,
		"/api/v1/items",
		ItemsGet,
	},

	{
		"ItemsItemIdDelete",
		http.MethodDelete,
		"/api/v1/items/:itemId",
		ItemsItemIdDelete,
	},

	{
		"ItemsItemIdGet",
		http.MethodGet,
		"/api/v1/items/:itemId",
		ItemsItemIdGet,
	},

	{
		"ItemsItemIdPut",
		http.MethodPut,
		"/api/v1/items/:itemId",
		ItemsItemIdPut,
	},

	{
		"ItemsPost",
		http.MethodPost,
		"/api/v1/items",
		ItemsPost,
	},

	{
		"OffersGet",
		http.MethodGet,
		"/api/v1/offers",
		OffersGet,
	},

	{
		"OffersOfferIdGet",
		http.MethodGet,
		"/api/v1/offers/:offerId",
		OffersOfferIdGet,
	},

	{
		"OffersOfferIdPut",
		http.MethodPut,
		"/api/v1/offers/:offerId",
		OffersOfferIdPut,
	},

	{
		"OffersPost",
		http.MethodPost,
		"/api/v1/offers",
		OffersPost,
	},
}
