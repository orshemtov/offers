package main

import (
	"log"

	"github.com/orshemtov/offers/server/pkg/routes"
)

const addr = ":5000"

func main() {
	r := routes.NewRouter()
	log.Fatal(r.Run(addr))
}
