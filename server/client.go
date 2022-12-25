package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type Client struct {
	gorm.Model
	Name    string `json:"name"`
	Company string `json:"company"`
	Address string `json:"address"`
	Phone   string `json:"phone"`
	Email   string `json:"email"`
}

var clientService ClientService

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
	var client Client
	err := c.BindJSON(&client)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
	}
	newClient, _ := clientService.Create(client)
	c.JSON(http.StatusCreated, newClient)
}

func CreateClients(c *gin.Context) {
	var clients []Client
	err := c.BindJSON(&clients)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
	}
	newClient, _ := clientService.CreateBulk(clients)
	c.JSON(http.StatusCreated, newClient)
}

func UpdateClient(c *gin.Context) {
	id := c.Param("id")
	var client Client
	err := c.BindJSON(&client)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
	}
	updatedClient, _ := clientService.Update(id, client)
	c.JSON(http.StatusCreated, updatedClient)
}

func DeleteClient(c *gin.Context) {
	id := c.Param("id")
	err := clientService.Delete(id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
	}
	c.JSON(http.StatusNoContent, gin.H{"status": "deleted", "id": id})
}

type ClientService struct{}

func (s *ClientService) GetAll() ([]Client, error) {
	var clients []Client
	result := DB.Find(&clients)
	if result.Error != nil {
		return nil, result.Error
	}

	return clients, nil
}

func (s *ClientService) Get(id string) (Client, error) {
	var client Client
	result := DB.First(&client, id)
	if result.Error != nil {
		return Client{}, result.Error
	}

	return client, nil
}

func (s *ClientService) Create(client Client) (Client, error) {
	result := DB.Create(&client)
	if result.Error != nil {
		return Client{}, result.Error
	}

	return client, nil
}

func (s *ClientService) CreateBulk(clients []Client) ([]Client, error) {
	result := DB.Create(clients)
	if result.Error != nil {
		return nil, result.Error
	}

	return clients, nil
}

func (s *ClientService) Update(id string, updatedClient Client) (Client, error) {
	var client Client
	result := DB.First(&client, id)
	if result.Error != nil {
		return Client{}, result.Error
	}

	client.Name = updatedClient.Name
	client.Company = updatedClient.Company
	client.Address = updatedClient.Address
	client.Phone = updatedClient.Phone
	client.Email = updatedClient.Email

	result = DB.Save(client)
	if result.Error != nil {
		return Client{}, result.Error
	}

	return client, nil
}

func (s *ClientService) Delete(id string) error {
	var client Client
	result := DB.First(&client, id)
	if result.Error != nil {
		return result.Error
	}

	result = DB.Delete(&client)
	if result.Error != nil {
		return result.Error
	}

	return nil
}
