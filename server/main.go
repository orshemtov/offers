package main

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/orshemtov/offers/server/routes"
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

	err := r.Run(":8080")
	if err != nil {
		log.Fatal(err)
	}
}
