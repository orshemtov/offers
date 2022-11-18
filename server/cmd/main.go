package main

import (
	"log"

	"github.com/gin-gonic/gin"
	_ "github.com/orshemtov/offers/server/pkg/model" // Initializes the database through its init() function
	"github.com/orshemtov/offers/server/pkg/routes"
)

func registerRoutes(r *gin.Engine) {
	// /clients
	r.GET("/clients", routes.GetClients)
	r.GET("/clients/:id", routes.GetClient)
	r.POST("/clients", routes.CreateClient)
	r.PUT("/clients", routes.UpdateClient)
	r.DELETE("/clients", routes.DeleteClient)

	// /products
	r.GET("/products/:id", routes.GetProducts)
	r.GET("/products", routes.GetProduct)
	r.POST("/products", routes.CreateProduct)
	r.PUT("/products", routes.UpdateProduct)
	r.DELETE("/products", routes.DeleteProduct)
}

func main() {
	r := gin.Default()
	registerRoutes(r)
	log.Fatal(r.Run(":8080"))
}
