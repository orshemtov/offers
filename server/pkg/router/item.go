package router

import (
	"net/http"

	"github.com/orshemtov/offers-system/server/pkg/service"
)

var itemService *service.ItemService

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
