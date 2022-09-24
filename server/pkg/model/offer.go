package model

import (
	"gorm.io/gorm"
)

type Offer struct {
	gorm.Model
	Date    string `json:"date"`
	To      Client `json:"to"`
	Title   string `json:"title"`
	Content string `json:"content"`
	Items   []Item `json:"items"`
}

func GetOffer(id int) Offer {
	var offer Offer
	db.Find(&offer, id)
	return offer
}

func GetAllOffers() []Offer {
	var offers []Offer
	db.Find(&offers)
	return offers
}

func CreateOffer(offer Offer) Offer {
	db.Create(&offer)
	return offer
}

func UpdateOffer(offer Offer) Offer {
	db.Save(offer)
	return offer
}

func DeleteOffer(id int) {
	db.Delete(&Offer{}, id)
}
