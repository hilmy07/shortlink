package repository

import (
	"context"

	"github.com/hilmy07/shotlink/backend/internal/models"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"
)

type LinkRepository struct {
	db *pgxpool.Pool
}

func NewLinkRepository(db *pgxpool.Pool) *LinkRepository {
	return &LinkRepository{db: db}
}

func (r *LinkRepository) Create(link models.Link) (models.Link, error) {
	query := `
		INSERT INTO links (original_url, slug, user_id)
		VALUES ($1, $2, $3)
		RETURNING id, original_url, slug, user_id
	`

	var result models.Link

	err := r.db.QueryRow(context.Background(), query,
		link.OriginalURL,
		link.Slug,
		link.UserID,
	).Scan(
		&result.ID,
		&result.OriginalURL,
		&result.Slug,
		&result.UserID,
	)

	return result, err
}

func (r *LinkRepository) GetByID(id int) (models.Link, error) {
	query := `
		SELECT id, original_url, slug
		FROM links
		WHERE id = $1
	`

	var link models.Link

	err := r.db.QueryRow(context.Background(), query, id).
		Scan(&link.ID, &link.OriginalURL, &link.Slug)

	return link, err
}

func (r *LinkRepository) GetBySlug(slug string) (models.Link, error) {
	query := `
		SELECT id, original_url, slug
		FROM links
		WHERE slug = $1
	`

	var link models.Link

	err := r.db.QueryRow(context.Background(), query, slug).
		Scan(&link.ID, &link.OriginalURL, &link.Slug)

	return link, err
}

// repository
func (r *LinkRepository) GetLinksByUserId(userId int) ([]*models.ResponseLinkByUserId, error) {
	rows, err := r.db.Query(context.Background(),
		`SELECT u.email, l.original_url 
		 FROM links l 
		 JOIN users u ON u.id = l.user_id 
		 WHERE l.user_id=$1`, userId)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	links, err := pgx.CollectRows(rows, pgx.RowToStructByPos[models.ResponseLinkByUserId])
	if err != nil {
		return nil, err
	}

	// Convert []models.ResponseLinkByUserId → []*models.ResponseLinkByUserId
	result := make([]*models.ResponseLinkByUserId, len(links))
	for i := range links {
		result[i] = &links[i]
	}

	return result, nil
}

func (r *LinkRepository) DeleteLink(id int) error {
	_, err := r.db.Exec(
		context.Background(),
		`DELETE FROM links WHERE id=$1`,
		id,
	)

	return err
}


