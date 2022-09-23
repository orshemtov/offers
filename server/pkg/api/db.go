package api

import (
	"fmt"

	"github.com/orshemtov/offers-system/server/pkg/model"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

const (
	Host     = "127.0.0.1"
	Port     = 3306
	User     = "root"
	Password = "admin"
	Database = ""
)

func init() {
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s", User, Password, Host, Port, Database) + "?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to database")
	}
	db.AutoMigrate(&model.Item{}, &model.Offer{}, &model.Entity{})
	DB = db
}
