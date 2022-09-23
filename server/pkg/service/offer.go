package service

import (
	"github.com/orshemtov/offers-system/server/pkg/model"
	"github.com/orshemtov/offers-system/server/pkg/repository"
)

type OfferService struct {
	repo repository.OfferRepository
}

func (s *OfferService) Get(id int) model.Offer {
	return s.repo.Get(id)
}

func (s *OfferService) GetAll() []model.Offer {
	return s.repo.GetAll()
}

func (s *OfferService) Create(offer model.Offer) model.Offer {
	return s.repo.Create(offer)
}

func (s *OfferService) Update(id int, offer model.Offer) model.Offer {
	return s.repo.Update(id, offer)
}

func (s *OfferService) Delete(id int) {
	s.repo.Delete(id)
}
