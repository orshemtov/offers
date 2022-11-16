package service

import (
	"github.com/orshemtov/offers/server/model"
	"go.mongodb.org/mongo-driver/mongo"
)

type ClientService struct {
	db *mongo.Client
}

func (s *ClientService) getCollection() *mongo.Collection {
	collectionName := "clients"
	return s.db.Database(dbName).Collection(collectionName)
}

func (s *ClientService) GetAll() []model.Client {
	panic("unimplemented")
}

func (s *ClientService) Get(id string) model.Client {
	panic("unimplemented")
}

func (s *ClientService) Create(data model.Client) model.Client {
	panic("unimplemented")
}

func (s *ClientService) Update(id string, data model.Client) model.Client {
	panic("unimplemented")
}

func (s *ClientService) Delete(id string) {
	panic("unimplemented")
}
