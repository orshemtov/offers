package model

import "gorm.io/gorm"

type Offer struct {
	gorm.Model
	Logo    string `json:"logo"`
	Date    string `json:"date"`
	To      Entity `json:"to"`
	From    Entity `json:"from"`
	Title   string `json:"title"`
	Content string `json:"content"`
	Items   []Item `json:"items"`
}
