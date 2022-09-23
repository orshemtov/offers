package repository

import (
	"github.com/orshemtov/offers-system/server/pkg/model"
	"gorm.io/gorm"
)

type ItemRepository struct {
	db *gorm.DB
}

func (r *ItemRepository) Get(id int) model.Item {
	var item model.Item
	r.db.Find(&item, id)
	return item
}

func (r *ItemRepository) GetAll() []model.Item {
	var items []model.Item
	r.db.Find(&items)
	return items
}

func (r *ItemRepository) Create(item model.Item) model.Item {
	r.db.Create(&item)
	return item
}

func (r *ItemRepository) Update(id int, item model.Item) model.Item {
	panic("implement me")
}

func (r *ItemRepository) Delete(id int) {
	r.db.Delete(&model.Item{}, id)
}
