package service

import (
	"github.com/orshemtov/offers/server/pkg/model"
)

type ProductService struct{}

func (s *ProductService) GetAll() ([]model.Product, error) {
	var products []model.Product
	result := model.DB.Find(&products)
	if result.Error != nil {
		return nil, result.Error
	}

	return products, nil
}

func (s *ProductService) Get(id string) (model.Product, error) {
	var product model.Product
	result := model.DB.First(&product, id)
	if result.Error != nil {
		return model.Product{}, result.Error
	}

	return product, nil
}

func (s *ProductService) Create(product model.Product) (model.Product, error) {
	result := model.DB.Create(&product)
	if result.Error != nil {
		return model.Product{}, result.Error
	}

	return product, nil
}

func (s *ProductService) CreateBulk(products []model.Product) ([]model.Product, error) {
	result := model.DB.Create(products)
	if result.Error != nil {
		return nil, result.Error
	}

	return products, nil
}

func (s *ProductService) Update(id string, updatedProduct model.Product) (model.Product, error) {
	var product model.Product
	result := model.DB.Find(&product, id)
	if result.Error != nil {
		return model.Product{}, result.Error
	}

	product.Name = updatedProduct.Name
	product.Make = updatedProduct.Make
	product.Description = updatedProduct.Description
	product.Price = updatedProduct.Price
	product.Image = updatedProduct.Image

	result = model.DB.Save(product)
	if result.Error != nil {
		return model.Product{}, result.Error
	}

	return product, nil
}

func (s *ProductService) Delete(id string) error {
	var product model.Product
	result := model.DB.First(&product, id)
	if result.Error != nil {
		return result.Error
	}

	result = model.DB.Delete(&product)
	if result.Error != nil {
		return result.Error
	}

	return nil
}
