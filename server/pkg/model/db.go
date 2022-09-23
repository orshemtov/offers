package model

import (
	"fmt"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

const (
	Host     = "127.0.0.1"
	Port     = 3306
	User     = "root"
	Password = "admin"
	Database = "main"
)

func InitDB() {
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s", User, Password, Host, Port, Database)

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to database")
	}

	var item Item
	var offer Offer
	var entity Client
	db.AutoMigrate(&item, &offer, &entity)

	DB = db
}
