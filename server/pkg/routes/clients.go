package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/orshemtov/offers/server/pkg/model"
	"github.com/orshemtov/offers/server/pkg/service"
)

var clientService service.ClientService

func GetClients(c *gin.Context) {
	clients, _ := clientService.GetAll()
	c.JSON(http.StatusOK, clients)
}

func GetClient(c *gin.Context) {
	id := c.Param("id")
	client, _ := clientService.Get(id)
	c.JSON(http.StatusOK, client)
}

func CreateClient(c *gin.Context) {
	var client model.Client
	err := c.BindJSON(&client)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
	}
	newClient, _ := clientService.Create(client)
	c.JSON(http.StatusCreated, newClient)
}

func UpdateClient(c *gin.Context) {
	id := c.Param("id")
	var client model.Client
	err := c.BindJSON(client)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
	}
	updatedClient, _ := clientService.Update(id, client)
	c.JSON(http.StatusCreated, updatedClient)
}

func DeleteClient(c *gin.Context) {
	id := c.Param("id")
	clientService.Delete(id)
	c.String(http.StatusNoContent, "Item has been deleted")
}
