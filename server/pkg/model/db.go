package model

import (
	"fmt"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var db *gorm.DB

const (
	Host     = "127.0.0.1"
	Port     = 3306
	User     = "root"
	Password = "admin"
	Database = "main"
)

var (
	DSN = fmt.Sprintf("%s:%s@tcp(%s:%d)/%s", User, Password, Host, Port, Database) // Database connection string
)

func Setup() {
	var err error

	db, err = gorm.Open(mysql.Open(DSN), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to database")
	}

	err = db.AutoMigrate(&Client{}, &Item{}, &Offer{})
	if err != nil {
		panic("Could not complete auto migrations")
	}
}
