package main

import (
	"fmt"
	"log"

	api "github.com/orshemtov/offers-system/server/pkg/api"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

const (
	User     = "root"
	Password = "admin"
	DBName   = ""
)

func main() {
	log.Printf("Server started")

	dsn := fmt.Sprintf("%s:%s@tcp(127.0.0.1:3306)/%s?charset=utf8mb4&parseTime=True&loc=Local", User, Password, DBName)
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Could not connect to database")
	}
	fmt.Printf("DB: %s", db.Name())

	router := api.NewRouter()

	log.Fatal(router.Run(":5000"))
}
