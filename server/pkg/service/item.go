package service

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gookit/goutil/strutil"
	"github.com/orshemtov/offers-system/server/pkg/model"
)

type ItemService struct{}

func (s *ItemService) Get(c *gin.Context) {
	id := strutil.MustInt(c.Param("itemId"))
	item := model.GetItem(id)
	c.JSON(http.StatusOK, item)
}

func (s *ItemService) GetAll(c *gin.Context) {
	items := model.GetAllItems()
	c.JSON(http.StatusOK, items)
}

func (s *ItemService) Create(c *gin.Context) {
	defer c.Request.Body.Close()
	var item model.Item
	_ = c.BindJSON(&item)
	item = model.CreateItem(item)
	c.JSON(http.StatusCreated, item)
}

func (s *ItemService) Update(c *gin.Context) {
	c.JSON(http.StatusOK, &gin.H{})
}

func (s *ItemService) Delete(c *gin.Context) {
	c.JSON(http.StatusOK, &gin.H{})
}
