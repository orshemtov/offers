package models

type Item struct {
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Price       float32 `json:"price"`
	Image       string  `json:"image"`
}
