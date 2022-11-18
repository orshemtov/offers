package model

import "gorm.io/gorm"

type Client struct {
	gorm.Model
	Name    string `json:"name"`
	Company string `json:"company"`
	Address string `json:"address"`
	Phone   string `json:"phone"`
	Email   string `json:"email"`
}
