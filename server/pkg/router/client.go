package router

import (
	"net/http"

	"github.com/orshemtov/offers-system/server/pkg/service"
)

var clientService *service.ClientService

var entityRoutes = Routes{
	{
		"GetEntity",
		http.MethodGet,
		"/api/v1/entities/:entityId",
		clientService.Get,
	},
	{
		"GetAllEntities",
		http.MethodGet,
		"/api/v1/entities",
		clientService.GetAll,
	},
	{
		"CreateEntity",
		http.MethodPost,
		"/api/v1/entities",
		clientService.Create,
	},
	{
		"UpdateEntity",
		http.MethodPut,
		"/api/v1/entities/:entityId",
		clientService.Update,
	},
	{
		"DeleteEntity",
		http.MethodDelete,
		"/api/v1/entities/:entityId",
		clientService.Delete,
	},
}
