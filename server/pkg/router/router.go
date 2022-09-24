package router

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/orshemtov/offers-system/server/pkg/service"
)

type Route struct {
	Name        string
	Method      string
	Pattern     string
	HandlerFunc gin.HandlerFunc
}

type Routes []Route

var routes Routes

func Setup() {
	for _, route := range clientRoutes {
		routes = append(routes, route)
	}

	for _, route := range itemRoutes {
		routes = append(routes, route)
	}

	for _, route := range offerRoutes {
		routes = append(routes, route)
	}
}

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

var clientService *service.ClientService
var itemService *service.ItemService
var offerService *service.OfferService

var clientRoutes = Routes{
	{
		"GetClient",
		http.MethodGet,
		"/api/v1/clients/:clientId",
		clientService.Get,
	},
	{
		"GetAllClients",
		http.MethodGet,
		"/api/v1/clients",
		clientService.GetAll,
	},
	{
		"CreateClient",
		http.MethodPost,
		"/api/v1/clients",
		clientService.Create,
	},
	{
		"UpdateClient",
		http.MethodPut,
		"/api/v1/clients",
		clientService.Update,
	},
	{
		"DeleteClient",
		http.MethodDelete,
		"/api/v1/clients/:clientId",
		clientService.Delete,
	},
}

var itemRoutes = Routes{
	{
		"GetItem",
		http.MethodGet,
		"/api/v1/items/:itemId",
		itemService.Get,
	},
	{
		"GetItems",
		http.MethodGet,
		"/api/v1/items",
		itemService.GetAll,
	},
	{
		"CreateItem",
		http.MethodPost,
		"/api/v1/items",
		itemService.Create,
	},
	{
		"UpdateItem",
		http.MethodPut,
		"/api/v1/items",
		itemService.Update,
	},

	{
		"DeleteItem",
		http.MethodDelete,
		"/api/v1/items/:itemId",
		itemService.Delete,
	},
}

var offerRoutes = Routes{
	{
		"GetOffer",
		http.MethodGet,
		"/api/v1/offers/:offerId",
		offerService.Get,
	},
	{
		"GetOffers",
		http.MethodGet,
		"/api/v1/offers",
		offerService.GetAll,
	},
	{
		"CreateOffer",
		http.MethodPost,
		"/api/v1/offers",
		offerService.Create,
	},
	{
		"UpdateOffer",
		http.MethodPut,
		"/api/v1/offers",
		offerService.Update,
	},
	{
		"DeleteOffer",
		http.MethodDelete,
		"/api/v1/offers/:offerId",
		offerService.Delete,
	},
}
