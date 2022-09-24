package router

import (
	"net/http"

	"github.com/orshemtov/offers-system/server/pkg/service"
)

var clientService *service.ClientService

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
