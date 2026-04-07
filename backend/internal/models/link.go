package models

type Link struct {
	ID          int    `json:"id"`
	OriginalURL string `json:"original_url"`
	Slug        string `json:"slug"`
	UserID      int    `json:"user_id"`
}

type ResponseLinkByUserId struct {
	Email       string `json:"email"`
	OriginalURL string `json:"original_url"`
}