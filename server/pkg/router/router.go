package router

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/orshemtov/offers-system/server/pkg/service"
)

type Route struct {
	Method      string
	Pattern     string
	HandlerFunc gin.HandlerFunc
}

type Routes []Route

func NewRouter() *gin.Engine {
	router := gin.Default()
	v1 := router.Group("/api/v1")

	for _, route := range routes {
		switch route.Method {
		case http.MethodGet:
			v1.GET(route.Pattern, route.HandlerFunc)
		case http.MethodPost:
			v1.POST(route.Pattern, route.HandlerFunc)
		case http.MethodPut:
			v1.PUT(route.Pattern, route.HandlerFunc)
		case http.MethodPatch:
			v1.PATCH(route.Pattern, route.HandlerFunc)
		case http.MethodDelete:
			v1.DELETE(route.Pattern, route.HandlerFunc)
		}
	}
	return router
}

var routes = Routes{
	{
		http.MethodGet,
		"/clients/:clientId",
		service.GetClient,
	},
	{
		http.MethodGet,
		"/clients",
		service.GetAllClients,
	},
	{
		http.MethodPost,
		"/clients",
		service.CreateClient,
	},
	{
		http.MethodPut,
		"/clients",
		service.UpdateClient,
	},
	{
		http.MethodDelete,
		"/clients/:clientId",
		service.DeleteClient,
	},
	{
		http.MethodGet,
		"/items/:itemId",
		service.GetItem,
	},
	{
		http.MethodGet,
		"/items",
		service.GetAllItems,
	},
	{
		http.MethodPost,
		"/items",
		service.CreateItem,
	},
	{
		http.MethodPut,
		"/items",
		service.UpdateItem,
	},

	{
		http.MethodDelete,
		"/items/:itemId",
		service.DeleteItem,
	},
	{
		http.MethodGet,
		"/offers/:offerId",
		service.GetOffer,
	},
	{
		http.MethodGet,
		"/offers",
		service.GetAllOffers,
	},
	{
		http.MethodPost,
		"/offers",
		service.CreateOffer,
	},
	{
		http.MethodPut,
		"/offers",
		service.UpdateOffer,
	},
	{
		http.MethodDelete,
		"/api/v1/offers/:offerId",
		service.DeleteOffer,
	},
}
