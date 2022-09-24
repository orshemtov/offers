package model

import "gorm.io/gorm"

type Item struct {
	gorm.Model
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Price       float32 `json:"price"`
	Image       string  `json:"image"`
}

func GetItem(id int) (*Item, error) {
	var item Item
	result := db.Find(&item, id)
	if result.Error != nil {
		return nil, result.Error
	}
	return &item, nil
}

func GetAllItems() (*[]Item, error) {
	var items []Item
	result := db.Find(&items)
	if result.Error != nil {
		return nil, result.Error
	}
	return &items, nil
}

func CreateItem(item Item) (*Item, error) {
	result := db.Create(&item)
	if result.Error != nil {
		return nil, result.Error
	}
	return &item, nil
}

func UpdateItem(item Item) (*Item, error) {
	result := db.Save(item)
	if result.Error != nil {
		return nil, result.Error
	}
	return &item, nil
}

func DeleteItem(id int) error {
	result := db.Delete(&Item{}, id)
	if result.Error != nil {
		return result.Error
	}
	return nil
}
