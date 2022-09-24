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

func TestCreateClient(t *testing.T) {
	router := routes.NewRouter()
	w := httptest.NewRecorder()

	body := map[string]any{
		"name":    "",
		"address": "",
		"phone":   "",
		"email":   "",
	}

	jsonBody, err := json.Marshal(body)
	if err != nil {
		t.Fatal(err)
	}

	req, _ := http.NewRequest("POST", "/api/v1/clients", bytes.NewBuffer(jsonBody))
	router.ServeHTTP(w, req)

	assert.Equal(t, 201, w.Code)

	want := ""
	assert.Equal(t, want, w.Body.String())
}

func TestDeleteClient(t *testing.T) {
	router := routes.NewRouter()
	w := httptest.NewRecorder()

	id := "0"
	req, _ := http.NewRequest("DELETE", "/api/v1/clients/"+id, nil)
	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)

	want := ""
	assert.Equal(t, want, w.Body.String())
}

func TestGetAllClients(t *testing.T) {
	router := routes.NewRouter()
	w := httptest.NewRecorder()

	req, _ := http.NewRequest("GET", "/api/v1/clients", nil)
	router.ServeHTTP(w, req)

	assert.Equal(t, 204, w.Code)
}

func TestGetClient(t *testing.T) {
	router := routes.NewRouter()
	w := httptest.NewRecorder()

	id := "0"
	req, _ := http.NewRequest("GET", "/api/v1/clients/"+id, nil)
	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)

	want := ""
	assert.Equal(t, want, w.Body.String())
}

func TestUpdateClient(t *testing.T) {
	router := routes.NewRouter()
	w := httptest.NewRecorder()

	id := "0"
	body := map[string]any{
		"ID":      id,
		"name":    "",
		"address": "",
		"phone":   "",
		"email":   "",
	}

	jsonBody, err := json.Marshal(body)
	if err != nil {
		t.Fatal(err)
	}

	req, _ := http.NewRequest("PUT", "/api/v1/clients", bytes.NewBuffer(jsonBody))
	router.ServeHTTP(w, req)

	assert.Equal(t, 201, w.Code)

	want := ""
	assert.Equal(t, want, w.Body.String())
}
