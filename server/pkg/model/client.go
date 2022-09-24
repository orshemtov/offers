package model

import "gorm.io/gorm"

type Client struct {
	gorm.Model
	Name    string `json:"name"`
	Address string `json:"address"`
	Phone   string `json:"phone"`
	Email   string `json:"email"`
}

func GetClient(id int) (*Client, error) {
	var client Client
	result := db.Find(&client, id)
	if result.Error != nil {
		return nil, result.Error
	}
	return &client, nil
}

func GetAllClients() (*[]Client, error) {
	var clients []Client
	result := db.Find(&clients)
	if result.Error != nil {
		return nil, result.Error
	}
	return &clients, nil
}

func CreateClient(client Client) (*Client, error) {
	result := db.Create(&client)
	if result.Error != nil {
		return nil, result.Error
	}
	return &client, nil
}

func UpdateClient(client Client) (*Client, error) {
	result := db.Save(client)
	if result.Error != nil {
		return nil, result.Error
	}
	return &client, nil
}

func DeleteClient(id int) error {
	result := db.Delete(&Client{}, id)
	if result.Error != nil {
		return result.Error
	}
	return nil
}
