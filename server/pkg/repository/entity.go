package repository

import (
	"github.com/orshemtov/offers-system/server/pkg/model"
	"gorm.io/gorm"
)

type EntityRepository struct {
	db *gorm.DB
}

func (r *EntityRepository) Get(id int) model.Entity {
	var entity model.Entity
	r.db.Find(&entity, id)
	return entity
}

func (r *EntityRepository) GetAll() []model.Entity {
	var entities []model.Entity
	r.db.Find(&entities)
	return entities
}

func (r *EntityRepository) Create(entity model.Entity) model.Entity {
	r.db.Create(&entity)
	return entity
}

func (r *EntityRepository) Update(id int, entity model.Entity) model.Entity {
	panic("implement me")
}

func (r *EntityRepository) Delete(id int) {
	r.db.Delete(&model.Entity{}, id)
}
