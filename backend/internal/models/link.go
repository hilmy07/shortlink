package models

type Link struct {
	ID          int    `json:"id"`
	OriginalURL string `json:"original_url"`
	Slug        string `json:"slug"`
	UserID      int    `json:"user_id"`
}

type CreateLinkRequest struct {
	OriginalURL string `json:"original_url" binding:"required"`
	Slug        string `json:"slug" binding:"required"`
}

type ResponseLinkByUserId struct {
	Email       string `json:"email"`
	OriginalURL string `json:"original_url"`
	Slug        string `json:"-"`
	ShortLink   string `json:"short_url"`
}