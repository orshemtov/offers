package router

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/orshemtov/offers-system/server/pkg/service"
)

var entityService = service.EntityService{}

func GetEntity(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{})
}

func GetAllEntities(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{})
}

func CreateEntity(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{})
}

func UpdateEntity(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{})
}

func DeleteEntity(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{})
}

var entityRoutes = Routes{
	{
		"GetEntity",
		http.MethodGet,
		"/api/v1/entities/:entityId",
		GetEntity,
	},
	{
		"GetAllEntities",
		http.MethodGet,
		"/api/v1/entities",
		GetAllEntities,
	},
	{
		"CreateEntity",
		http.MethodPost,
		"/api/v1/entities",
		CreateEntity,
	},
	{
		"UpdateEntity",
		http.MethodPut,
		"/api/v1/entities/:entityId",
		UpdateEntity,
	},
	{
		"DeleteEntity",
		http.MethodDelete,
		"/api/v1/entities/:entityId",
		DeleteEntity,
	},
}
