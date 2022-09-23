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

var (
	DSN = fmt.Sprintf("%s:%s@tcp(%s:%d)/%s", User, Password, Host, Port, Database) // Database connection string
)

func InitDB() {
	db, err := gorm.Open(mysql.Open(DSN), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to database")
	}
	DB = db
}
