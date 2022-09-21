package main

import (
	"log"

	api "github.com/orshemtov/offers-system/server/pkg/api"
)

func main() {
	log.Printf("Server started")

	router := api.NewRouter()

	log.Fatal(router.Run(":8080"))
}
