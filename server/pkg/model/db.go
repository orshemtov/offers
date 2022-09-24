package model

import (
	"fmt"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var db *gorm.DB

const (
	host     = "127.0.0.1"
	port     = 3306
	user     = "root"
	password = "admin"
	database = "db"
)

func init() {
	var err error

	db, err = gorm.Open(
		mysql.Open(
			fmt.Sprintf(
				"%s:%s@tcp(%s:%d)/%s",
				user,
				password,
				host,
				port,
				database,
			),
		),
		&gorm.Config{},
	)
	if err != nil {
		panic("Failed to connect to database")
	}

	err = db.AutoMigrate(&Client{}, &Item{}, &Offer{})
	if err != nil {
		panic("Could not complete auto migrations")
	}
}
