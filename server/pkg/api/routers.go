package api

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
