package router

import (
	"net/http"

	"github.com/orshemtov/offers-system/server/pkg/service"
)

var offerService *service.OfferService

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
		"/api/v1/offers/:offerId",
		offerService.Update,
	},
	{
		"DeleteOffer",
		http.MethodDelete,
		"/api/v1/offers/:offerId",
		offerService.Delete,
	},
}
