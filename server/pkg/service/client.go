package service

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gookit/goutil/strutil"
	"github.com/orshemtov/offers-system/server/pkg/model"
)

func GetClient(c *gin.Context) {
	id := strutil.MustInt(c.Param("clientId"))
	client, err := model.GetClient(id)
	if err != nil {
		panic(err)
	}
	c.JSON(http.StatusOK, client)
}

func GetAllClients(c *gin.Context) {
	clients, err := model.GetAllClients()
	if err != nil {
		panic(err)
	}
	c.JSON(http.StatusOK, clients)
}

func CreateClient(c *gin.Context) {
	var client model.Client
	defer c.Request.Body.Close()
	c.BindJSON(&client)
	createdClient, err := model.CreateClient(client)
	if err != nil {
		panic(err)
	}
	c.JSON(http.StatusCreated, createdClient)
}

func UpdateClient(c *gin.Context) {
	defer c.Request.Body.Close()
	var client model.Client
	c.BindJSON(&client)
	updatedClient, err := model.UpdateClient(client)
	if err != nil {
		panic(err)
	}
	c.JSON(http.StatusOK, updatedClient)
}

func DeleteClient(c *gin.Context) {
	id := strutil.MustInt(c.Param("clientId"))
	err := model.DeleteClient(id)
	if err != nil {
		panic(err)
	}
	c.Status(http.StatusNoContent)
}
