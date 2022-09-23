package service

import (
	"github.com/orshemtov/offers-system/server/pkg/model"
	"github.com/orshemtov/offers-system/server/pkg/repository"
)

type EntityService struct {
	repo repository.EntityRepository
}

func (s *EntityService) Get(id int) model.Entity {
	return s.repo.Get(id)
}

func (s *EntityService) GetAll() []model.Entity {
	return s.repo.GetAll()
}

func (s *EntityService) Create(entity model.Entity) model.Entity {
	return s.repo.Create(entity)
}

func (s *EntityService) Update(id int, entity model.Entity) model.Entity {
	return s.repo.Update(id, entity)
}

func (s *EntityService) Delete(id int) {
	s.repo.Delete(id)
}
