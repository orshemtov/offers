package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
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
		GetClient,
	},
	{
		http.MethodGet,
		"/clients",
		GetAllClients,
	},
	{
		http.MethodPost,
		"/clients",
		CreateClient,
	},
	{
		http.MethodPut,
		"/clients",
		UpdateClient,
	},
	{
		http.MethodDelete,
		"/clients/:clientId",
		DeleteClient,
	},
	{
		http.MethodGet,
		"/products/:itemId",
		GetProduct,
	},
	{
		http.MethodGet,
		"/products",
		GetAllProducts,
	},
	{
		http.MethodPost,
		"/products",
		CreateProduct,
	},
	{
		http.MethodPut,
		"/products",
		UpdateProduct,
	},

	{
		http.MethodDelete,
		"/products/:itemId",
		DeleteProduct,
	},
	{
		http.MethodGet,
		"/offers/:offerId",
		GetOffer,
	},
	{
		http.MethodGet,
		"/offers",
		GetAllOffers,
	},
	{
		http.MethodPost,
		"/offers",
		CreateOffer,
	},
	{
		http.MethodPut,
		"/offers",
		UpdateOffer,
	},
	{
		http.MethodDelete,
		"/api/v1/offers/:offerId",
		DeleteOffer,
	},
}
