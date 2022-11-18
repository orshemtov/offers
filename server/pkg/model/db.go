package model

import (
	"log"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

const dbPath = "test.db"

var DB *gorm.DB

func init() {
	db, err := gorm.Open(sqlite.Open(dbPath), &gorm.Config{})
	if err != nil {
		panic("failed to connect to database")
	}
	db.AutoMigrate(&Client{}, &Product{})
	DB = db
	log.Println("connected to database")
}
