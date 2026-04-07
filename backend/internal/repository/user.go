package repository

import (
	"context"
	"time"

	"github.com/hilmy07/shotlink/backend/internal/models"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"
)

type UserRepository struct {
	db *pgxpool.Pool
}

func NewUserRepository(db *pgxpool.Pool) *UserRepository {
	return &UserRepository{db: db}
}

func (r *UserRepository) GetByEmail(email string) (*models.User, error) {

	rows, err := r.db.Query(
		context.Background(),
		`SELECT 
		id,
		email,
		COALESCE(fullname, '') as fullname,
		password,
		COALESCE(phone, '') as phone,
		COALESCE(address, '') as address,
		COALESCE(profile_img, '') as profile_img,
		created_at,
		updated_at
		FROM users 
		WHERE email=$1`,
		email,
	)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	user, err := pgx.CollectOneRow(rows, pgx.RowToStructByPos[models.User])
	if err != nil {
		if err == pgx.ErrNoRows {
			return nil, nil
		}
		return nil, err
	}

	return &user, nil
}

func (r *UserRepository) CreateUser(req models.CreateUserRequest) error {

	now := time.Now()

	_, err := r.db.Exec(
		context.Background(),
		`INSERT INTO users 
		(fullname, email, password, created_at, updated_at)
		VALUES ($1,$2,$3,$4,$5)`,
		req.Fullname,
		req.Email,
		req.Password,
		now,
		now,
	)

	return err
}
