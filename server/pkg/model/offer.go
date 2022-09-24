package model

import (
	"gorm.io/gorm"
)

type Offer struct {
	gorm.Model
	Date    string    `json:"date"`
	To      int       `json:"to" gorm:"foreignKey:ClientID"`
	Title   string    `json:"title"`
	Content string    `json:"content"`
	Items   []Product `json:"items" gorm:"many2many:offer_item"`
}

func GetOffer(id int) (*Offer, error) {
	var offer Offer
	result := db.Find(&offer, id)
	if result.Error != nil {
		return nil, result.Error
	}
	return &offer, nil
}

func GetAllOffers() (*[]Offer, error) {
	var offers []Offer
	result := db.Find(&offers)
	if result.Error != nil {
		return nil, result.Error
	}
	return &offers, nil
}

func CreateOffer(offer Offer) (*Offer, error) {
	result := db.Create(&offer)
	if result.Error != nil {
		return nil, result.Error
	}
	return &offer, nil
}

func UpdateOffer(offer Offer) (*Offer, error) {
	result := db.Save(offer)
	if result.Error != nil {
		return nil, result.Error
	}
	return &offer, nil
}

func DeleteOffer(id int) error {
	result := db.Delete(&Offer{}, id)
	if result.Error != nil {
		return result.Error
	}
	return nil
}
