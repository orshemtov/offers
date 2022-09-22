package main

import (
	"log"

	api "github.com/orshemtov/offers-system/server/pkg/api"
)

func main() {
	router := api.NewRouter()

	log.Fatal(router.Run(":5000"))
}
