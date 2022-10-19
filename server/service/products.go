package service

import model "github.com/orshemtov/offers/server/model"

type ProductService struct {}

func (s ProductService) GetAll() []model.Product {
	panic("unimplemented")
}

func (s ProductService) Get(id string) model.Product {
	panic("unimplemented")
}

func (s ProductService) Create(data model.Product) model.Product {
	panic("unimplemented")
}

func (s ProductService) Update(id string, data model.Product) model.Product {
	panic("unimplemented")
}

func (s ProductService) Delete(id string) {
	panic("unimplemented")
}
