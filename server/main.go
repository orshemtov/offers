package main

import (
	"log"

	api "github.com/orshemtov/offers-system/server/pkg/api"
	"github.com/orshemtov/offers-system/server/pkg/model"
)

func main() {
	model.InitDB()
	router := api.NewRouter()
	log.Fatal(router.Run(":5000"))
}
