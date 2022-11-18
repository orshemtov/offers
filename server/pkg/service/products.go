package service

import (
	"github.com/orshemtov/offers/server/pkg/model"
)

type ProductService struct{}

func (s *ProductService) GetAll() ([]model.Product, error) {
	var products []model.Product
	_ = model.DB.Find(&products)
	return products, nil
}

func (s *ProductService) Get(id string) (model.Product, error) {
	var product model.Product
	_ = model.DB.First(&product, id)
	return product, nil
}

func (s *ProductService) Create(product model.Product) (model.Product, error) {
	_ = model.DB.Create(&product)
	return product, nil
}

func (s *ProductService) Update(id string, updatedProduct model.Product) (model.Product, error) {
	var product model.Product
	_ = model.DB.Find(&product, id)

	product.Name = updatedProduct.Name
	product.Make = updatedProduct.Make
	product.Description = updatedProduct.Description
	product.Price = updatedProduct.Price
	product.Image = updatedProduct.Image

	model.DB.Save(product)
	return product, nil
}

func (s *ProductService) Delete(id string) error {
	_ = model.DB.Delete(id)
	return nil
}
