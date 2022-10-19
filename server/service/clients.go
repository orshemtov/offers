package service

import model "github.com/orshemtov/offers/server/model"

type ClientService struct {
}

func (s ClientService) GetAll() []model.Client {
	panic("unimplemented")
}

func (s ClientService) Get(id string) model.Client {
	panic("unimplemented")
}

func (s ClientService) Create(data model.Client) model.Client {
	panic("unimplemented")
}

func (s ClientService) Update(id string, data model.Client) model.Client {
	panic("unimplemented")
}

func (s ClientService) Delete(id string) {
	panic("unimplemented")
}
