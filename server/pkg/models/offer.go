package models

type Offer struct {
	Logo    string `json:"logo"`
	Date    string `json:"date"`
	To      Entity `json:"to"`
	From    Entity `json:"from"`
	Title   string `json:"title"`
	Content string `json:"content"`
	Items   []Item `json:"items"`
}
