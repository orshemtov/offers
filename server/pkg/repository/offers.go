package repository

import (
	"github.com/orshemtov/offers-system/server/pkg/model"
	"gorm.io/gorm"
)

type OfferRepository struct {
	db *gorm.DB
}

func (r *OfferRepository) Get(id int) model.Offer {
	var offer model.Offer
	r.db.Find(&offer, id)
	return offer
}

func (r *OfferRepository) GetAll() []model.Offer {
	var offers []model.Offer
	r.db.Find(&offers)
	return offers
}

func (r *OfferRepository) Create(offer model.Offer) model.Offer {
	r.db.Create(&offer)
	return offer
}

func (r *OfferRepository) Update(id int, offer model.Offer) model.Offer {
	panic("implement me")
}

func (r *OfferRepository) Delete(id int) {
	r.db.Delete(&model.Offer{}, id)
}
