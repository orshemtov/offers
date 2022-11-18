package service

import "github.com/orshemtov/offers/server/pkg/model"

type ClientService struct{}

func (s *ClientService) GetAll() ([]model.Client, error) {
	var clients []model.Client
	_ = model.DB.Find(&clients)
	return clients, nil
}

func (s *ClientService) Get(id string) (model.Client, error) {
	var client model.Client
	_ = model.DB.First(&client, id)
	return client, nil
}

func (s *ClientService) Create(client model.Client) (model.Client, error) {
	_ = model.DB.Create(&client)
	return client, nil
}

func (s *ClientService) Update(id string, updatedClient model.Client) (model.Client, error) {
	var client model.Client
	_ = model.DB.First(&client, id)

	client.Name = updatedClient.Name
	client.Company = updatedClient.Company
	client.Address = updatedClient.Address
	client.Phone = updatedClient.Phone
	client.Email = updatedClient.Email

	model.DB.Save(client)

	return client, nil
}

func (s *ClientService) Delete(id string) error {
	_ = model.DB.Delete(id)
	return nil
}
