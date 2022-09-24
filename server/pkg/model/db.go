package model

import (
	"fmt"

	"github.com/bigkevmcd/go-configparser"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var db *gorm.DB

const (
	configPath    = "conf/config.ini"
	configSection = "db"
)

func Setup() {
	parser, err := configparser.NewConfigParserFromFile(configPath)
	if err != nil {
		panic("Could not parse config")
	}

	cfg, err := parser.Items(configSection)
	if err != nil {
		panic("Could not parse config section")
	}

	db, err = gorm.Open(
		mysql.Open(
			fmt.Sprintf(
				"%s:%s@tcp(%s:%s)/%s",
				cfg["user"],
				cfg["password"],
				cfg["host"],
				cfg["port"],
				cfg["database"],
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
