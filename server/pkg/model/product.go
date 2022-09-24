package model

import "gorm.io/gorm"

type Product struct {
	gorm.Model
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Price       float32 `json:"price"`
	Image       string  `json:"image"`
}

func GetProduct(id int) (*Product, error) {
	var item Product
	result := db.Find(&item, id)
	if result.Error != nil {
		return nil, result.Error
	}
	return &item, nil
}

func GetAllProducts() (*[]Product, error) {
	var items []Product
	result := db.Find(&items)
	if result.Error != nil {
		return nil, result.Error
	}
	return &items, nil
}

func CreateProduct(item Product) (*Product, error) {
	result := db.Create(&item)
	if result.Error != nil {
		return nil, result.Error
	}
	return &item, nil
}

func UpdateProduct(item Product) (*Product, error) {
	result := db.Save(item)
	if result.Error != nil {
		return nil, result.Error
	}
	return &item, nil
}

func DeleteProduct(id int) error {
	result := db.Delete(&Product{}, id)
	if result.Error != nil {
		return result.Error
	}
	return nil
}
