package model

import (
	"gorm.io/gorm"
)

type Entity struct {
	gorm.Model
	Name    string `json:"name"`
	Address string `json:"address"`
	Phone   string `json:"phone"`
	Email   string `json:"email"`
}

type Item struct {
	gorm.Model
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Price       float32 `json:"price"`
	Image       string  `json:"image"`
}

type Offer struct {
	gorm.Model
	Date    string `json:"date"`
	Logo    string `json:"logo"`
	To      Entity `json:"to"`
	From    Entity `json:"from"`
	Title   string `json:"title"`
	Content string `json:"content"`
	Items   []Item `json:"items"`
}
