package container

import (
	"context"
	"fmt"
	"os"

	"github.com/jackc/pgx/v5/pgxpool"
)

type Container struct {
	db *pgxpool.Pool
}

func NewContainer(db *pgxpool.Pool) *Container {

	c := Container{
		db: db,
	}

	c.init()

	return &c
}

func (c *Container) init() { 

}

func Connect() (*pgxpool.Pool, error) {

	dsn := fmt.Sprintf(
		"postgres://%s:%s@%s:%s/postgres?sslmode=%s",
		os.Getenv("PGUSER"),
		os.Getenv("PGPASSWORD"),
		os.Getenv("PGHOST"),
		os.Getenv("PGPORT"),
		os.Getenv("PGSSLMODE"),
	)

	conn, err := pgxpool.New(context.Background(), dsn)

	if err != nil {
		return nil, err
	}

	return conn, nil
}