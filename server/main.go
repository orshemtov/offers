package main

import (
	"log"
)

func main() {
	log.Printf("Server started")

	router := NewRouter()

	log.Fatal(router.Run(":8080"))
}
