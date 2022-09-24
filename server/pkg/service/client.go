package service

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gookit/goutil/strutil"
	"github.com/orshemtov/offers-system/server/pkg/model"
)

type ClientService struct{}

func (s *ClientService) Get(c *gin.Context) {
	id := strutil.MustInt(c.Param("entityId"))
	entity := model.GetEntity(id)
	c.JSON(http.StatusOK, entity)
}

func (s *ClientService) GetAll(c *gin.Context) {
	entities := model.GetAllEntities()
	c.JSON(http.StatusOK, entities)
}

func (s *ClientService) Create(c *gin.Context) {
	var entity model.Client
	defer c.Request.Body.Close()
	_ = c.BindJSON(&entity)
	entity = model.CreateClient(entity)
	c.JSON(http.StatusCreated, entity)
}

func (s *ClientService) Update(c *gin.Context) {
	c.JSON(http.StatusOK, &gin.H{})
}

func (s *ClientService) Delete(c *gin.Context) {
	c.JSON(http.StatusOK, &gin.H{})
}
