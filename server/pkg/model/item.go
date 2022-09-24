package model

import "gorm.io/gorm"

type Item struct {
	gorm.Model
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Price       float32 `json:"price"`
	Image       string  `json:"image"`
}

func GetItem(id int) Item {
	var item Item
	db.Find(&item, id)
	return item
}

func GetAllItems() []Item {
	var items []Item
	db.Find(&items)
	return items
}

func CreateItem(item Item) Item {
	db.Create(&item)
	return item
}

func UpdateItem(item Item) Item {
	db.Save(item)
	return item
}

func DeleteItem(id int) {
	db.Delete(&Item{}, id)
}
