package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/orshemtov/offers/server/model"
	"github.com/orshemtov/offers/server/service"
)

var clientService service.ClientService

func GetClients(c *gin.Context) {
	clients := clientService.GetAll()
	c.JSON(http.StatusOK, clients)
}

func GetClient(c *gin.Context) {
	id := c.Param("id")
	client := clientService.Get(id)
	c.JSON(http.StatusOK, client)
}

func CreateClient(c *gin.Context) {
	var data model.Client
	if err := c.ShouldBindJSON(&data); err == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
	client := clientService.Create(data)
	c.JSON(http.StatusCreated, client)
}

func UpdateClient(c *gin.Context) {
	id := c.Param("id")
	var data model.Client
	if err := c.ShouldBindJSON(&data); err == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
	client := clientService.Update(id, data)
	c.JSON(http.StatusCreated, client)
}

func DeleteClient(c *gin.Context) {
	id := c.Param("id")
	clientService.Delete(id)
	c.String(http.StatusNoContent, "Item has been deleted")
}
