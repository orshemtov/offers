package service

import (
	"github.com/orshemtov/offers/server/model"
	"go.mongodb.org/mongo-driver/mongo"
)

type ProductService struct {
	db *mongo.Client
}

func (s *ProductService) getCollection() *mongo.Collection {
	collectionName := "products"
	return s.db.Database(dbName).Collection(collectionName)
}

func (s *ProductService) GetAll() []model.Product {
	panic("unimplemnted")
}

func (s *ProductService) Get(id string) model.Product {
	panic("unimplemented")
}

func (s *ProductService) Create(data model.Product) model.Product {
	panic("unimplemented")
}

func (s *ProductService) Update(id string, data model.Product) model.Product {
	panic("unimplemented")
}

func (s *ProductService) Delete(id string) {
	panic("unimplemented")
}
