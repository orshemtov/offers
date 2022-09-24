package main

import (
	"log"

	"github.com/orshemtov/offers-system/server/pkg/model"
	"github.com/orshemtov/offers-system/server/pkg/router"
)

func init() {
	model.Setup()
}

func main() {
	r := router.NewRouter()
	log.Fatal(r.Run(":5000"))
}
