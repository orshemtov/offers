package model

import "gorm.io/gorm"

type Client struct {
	gorm.Model
	Name    string `json:"name"`
	Address string `json:"address"`
	Phone   string `json:"phone"`
	Email   string `json:"email"`
}

func GetEntity(id int) Client {
	var entity Client
	db.Find(&entity, id)
	return entity
}

func GetAllEntities() []Client {
	var entities []Client
	db.Find(&entities)
	return entities
}

func CreateClient(entity Client) Client {
	db.Create(&entity)
	return entity
}

func UpdateEntity(entity Client) Client {
	db.Save(entity)
	return entity
}

func DeleteEntity(id int) {
	db.Delete(&Client{}, id)
}
