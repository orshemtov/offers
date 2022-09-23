package model

import (
	"gorm.io/gorm"
)

type Company struct {
	gorm.Model
	Name    string `json:"name"`
	Address string `json:"address"`
	Phone   string `json:"phone"`
	Email   string `json:"email"`
	Logo    string `json:"logo"`
}

type Client struct {
	gorm.Model
	Name    string `json:"name"`
	Address string `json:"address"`
	Phone   string `json:"phone"`
	Email   string `json:"email"`
}

type Offer struct {
	gorm.Model
	Date    string  `json:"date"`
	To      Client  `json:"to"`
	From    Company `json:"from"`
	Title   string  `json:"title"`
	Content string  `json:"content"`
	Items   []Item  `json:"items"`
}
