package service

import (
	"github.com/orshemtov/offers/server/pkg/model"
)

type ClientService struct{}

func (s *ClientService) GetAll() ([]model.Client, error) {
	var clients []model.Client
	result := model.DB.Find(&clients)
	if result.Error != nil {
		return nil, result.Error
	}

	return clients, nil
}

func (s *ClientService) Get(id string) (model.Client, error) {
	var client model.Client
	result := model.DB.First(&client, id)
	if result.Error != nil {
		return model.Client{}, result.Error
	}

	return client, nil
}

func (s *ClientService) Create(client model.Client) (model.Client, error) {
	result := model.DB.Create(&client)
	if result.Error != nil {
		return model.Client{}, result.Error
	}

	return client, nil
}

func (s *ClientService) CreateBulk(clients []model.Client) ([]model.Client, error) {
	result := model.DB.Create(clients)
	if result.Error != nil {
		return nil, result.Error
	}

	return clients, nil
}

func (s *ClientService) Update(id string, updatedClient model.Client) (model.Client, error) {
	var client model.Client
	result := model.DB.First(&client, id)
	if result.Error != nil {
		return model.Client{}, result.Error
	}

	client.Name = updatedClient.Name
	client.Company = updatedClient.Company
	client.Address = updatedClient.Address
	client.Phone = updatedClient.Phone
	client.Email = updatedClient.Email

	result = model.DB.Save(client)
	if result.Error != nil {
		return model.Client{}, result.Error
	}

	return client, nil
}

func (s *ClientService) Delete(id string) error {
	var client model.Client
	result := model.DB.First(&client, id)
	if result.Error != nil {
		return result.Error
	}

	result = model.DB.Delete(&client)
	if result.Error != nil {
		return result.Error
	}

	return nil
}
