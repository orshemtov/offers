package test

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/orshemtov/offers-system/server/pkg/routes"
	"github.com/stretchr/testify/assert"
)

func TestCreateItem(t *testing.T) {
	router := routes.NewRouter()
	w := httptest.NewRecorder()

	body := map[string]any{}

	jsonBody, err := json.Marshal(body)
	if err != nil {
		t.Fatal(err)
	}

	req, _ := http.NewRequest("POST", "/api/v1/items", bytes.NewBuffer(jsonBody))
	router.ServeHTTP(w, req)

	assert.Equal(t, 201, w.Code)

	want := ""
	assert.Equal(t, want, w.Body.String())
}

func TestDeleteItem(t *testing.T) {
	router := routes.NewRouter()
	w := httptest.NewRecorder()

	id := "0"
	req, _ := http.NewRequest("DELETE", "/api/v1/items/"+id, nil)
	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)

	want := ""
	assert.Equal(t, want, w.Body.String())
}

func TestGetAllItems(t *testing.T) {
	router := routes.NewRouter()
	w := httptest.NewRecorder()

	req, _ := http.NewRequest("GET", "/api/v1/items", nil)
	router.ServeHTTP(w, req)

	assert.Equal(t, 204, w.Code)
}

func TestGetItem(t *testing.T) {
	router := routes.NewRouter()
	w := httptest.NewRecorder()

	id := "0"
	req, _ := http.NewRequest("GET", "/api/v1/items/"+id, nil)
	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)

	want := ""
	assert.Equal(t, want, w.Body.String())
}

func TestUpdateItem(t *testing.T) {
	router := routes.NewRouter()
	w := httptest.NewRecorder()

	id := "0"
	body := map[string]any{
		"ID": id,
	}

	jsonBody, err := json.Marshal(body)
	if err != nil {
		t.Fatal(err)
	}

	req, _ := http.NewRequest("PUT", "/api/v1/items", bytes.NewBuffer(jsonBody))
	router.ServeHTTP(w, req)

	assert.Equal(t, 201, w.Code)

	want := ""
	assert.Equal(t, want, w.Body.String())
}
