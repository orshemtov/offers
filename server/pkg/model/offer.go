package model

import (
	"time"

	"gorm.io/gorm"
)

type Listing struct {
	Product
	Quantity int `json:"quantity"`
}

type Section struct {
	Name     string    `json:"name"`
	Listings []Listing `json:"listings"`
}

type Offer struct {
	gorm.Model
	Date     time.Time `json:"date"`
	Title    string    `json:"title"`
	Content  string    `json:"content"`
	Sections []Section `json:"sections"`
	Notes    []string  `json:"notes"`
}
