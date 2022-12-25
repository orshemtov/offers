package main

import (
	"log"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

const (
	dbPath = "test.db"
)

var DB *gorm.DB

func init() {
	db, err := gorm.Open(sqlite.Open(dbPath), &gorm.Config{})
	if err != nil {
		panic("failed to connect to database")
	}
	_ = db.AutoMigrate(&Client{}, &Product{})
	DB = db
	log.Println("connected to database")
}

func main() {
	r := gin.Default()

	r.GET("/clients", GetClients)
	r.GET("/clients/:id", GetClient)
	r.POST("/clients", CreateClient)
	r.POST("/clients/bulk", CreateClients)
	r.PUT("/clients", UpdateClient)
	r.DELETE("/clients", DeleteClient)

	// products
	r.GET("/products", GetProducts)
	r.GET("/products/sections", GetProductsBySection)
	r.GET("/products/:id", GetProduct)
	r.POST("/products", CreateProduct)
	r.POST("/products/bulk", CreateProducts)
	r.PUT("/products", UpdateProduct)
	r.DELETE("/products", DeleteProduct)

	log.Fatal(r.Run(":8080"))
}
