package service

import (
	"github.com/orshemtov/offers-system/server/pkg/model"
	"github.com/orshemtov/offers-system/server/pkg/repository"
)

type ItemService struct {
	repo repository.ItemRepository
}

func (s *ItemService) Get(id int) model.Item {
	return s.repo.Get(id)
}

func (s *ItemService) GetAll() []model.Item {
	return s.repo.GetAll()
}

func (s *ItemService) Create(item model.Item) model.Item {
	return s.repo.Create(item)
}

func (s *ItemService) Update(id int, item model.Item) model.Item {
	return s.repo.Update(id, item)
}

func (s *ItemService) Delete(id int) {
	s.repo.Delete(id)
}
