package model

import (
	"gorm.io/gorm"
)

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
