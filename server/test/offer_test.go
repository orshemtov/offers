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

func TestCreateOffer(t *testing.T) {
	router := routes.NewRouter()
	w := httptest.NewRecorder()

	body := map[string]any{}

	jsonBody, err := json.Marshal(body)
	if err != nil {
		t.Fatal(err)
	}

	req, _ := http.NewRequest("POST", "/api/v1/offers", bytes.NewBuffer(jsonBody))
	router.ServeHTTP(w, req)

	assert.Equal(t, 201, w.Code)

	want := ""
	assert.Equal(t, want, w.Body.String())
}

func TestDeleteOffer(t *testing.T) {
	router := routes.NewRouter()
	w := httptest.NewRecorder()

	id := "0"
	req, _ := http.NewRequest("DELETE", "/api/v1/offers/"+id, nil)
	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)

	want := ""
	assert.Equal(t, want, w.Body.String())
}

func TestGetAllOffers(t *testing.T) {
	router := routes.NewRouter()
	w := httptest.NewRecorder()

	req, _ := http.NewRequest("GET", "/api/v1/offers", nil)
	router.ServeHTTP(w, req)

	assert.Equal(t, 204, w.Code)
}

func TestGetOffer(t *testing.T) {
	router := routes.NewRouter()
	w := httptest.NewRecorder()

	id := "0"
	req, _ := http.NewRequest("GET", "/api/v1/offers/"+id, nil)
	router.ServeHTTP(w, req)

	assert.Equal(t, 200, w.Code)

	want := ""
	assert.Equal(t, want, w.Body.String())
}

func TestUpdateOffer(t *testing.T) {
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

	req, _ := http.NewRequest("PUT", "/api/v1/offers", bytes.NewBuffer(jsonBody))
	router.ServeHTTP(w, req)

	assert.Equal(t, 201, w.Code)

	want := ""
	assert.Equal(t, want, w.Body.String())
}
