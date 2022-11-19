package main

import (
	"log"

	"github.com/gin-gonic/gin"
	_ "github.com/orshemtov/offers/server/pkg/model" // Initializes the database through its init() function
	"github.com/orshemtov/offers/server/pkg/route"
)

func registerRoutes(r *gin.Engine) {
	// clients
	r.GET("/clients", route.GetClients)
	r.GET("/clients/:id", route.GetClient)
	r.POST("/clients", route.CreateClient)
	r.POST("/clients/bulk", route.CreateClients)
	r.PUT("/clients", route.UpdateClient)
	r.DELETE("/clients", route.DeleteClient)

	// products
	r.GET("/products", route.GetProducts)
	r.GET("/products/:id", route.GetProduct)
	r.POST("/products", route.CreateProduct)
	r.POST("/products/bulk", route.CreateProducts)
	r.PUT("/products", route.UpdateProduct)
	r.DELETE("/products", route.DeleteProduct)
}

func main() {
	r := gin.Default()
	registerRoutes(r)
	log.Fatal(r.Run(":8080"))
}
