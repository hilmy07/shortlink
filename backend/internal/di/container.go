package container

import (
	"context"
	"fmt"
	"os"

	"github.com/hilmy07/shotlink/backend/internal/handlers"
	"github.com/hilmy07/shotlink/backend/internal/repository"
	"github.com/hilmy07/shotlink/backend/internal/service"
	"github.com/jackc/pgx/v5/pgxpool"
)

type Container struct {
	db *pgxpool.Pool

	userRepo    *repository.UserRepository
	linkRepo *repository.LinkRepository

	authService *service.AuthService
	authHandler *handlers.AuthHandler
	linkService *service.LinkService
	linkHandler *handlers.LinkHandler
}

func NewContainer(db *pgxpool.Pool) *Container {

	c := Container{
		db: db,
	}

	c.init()

	return &c
}

func (c *Container) init() { 
	c.userRepo = repository.NewUserRepository(c.db)
	c.linkRepo = repository.NewLinkRepository(c.db)

	c.authService = service.NewAuthService(c.userRepo)
	c.authHandler = handlers.NewAuthHandler(c.authService)

	c.linkService = service.NewLinkService(c.linkRepo)
	c.linkHandler = handlers.NewLinkHandler(c.linkService)
}

func (c *Container) AuthHandler() *handlers.AuthHandler {
	return c.authHandler
}

func (c *Container) LinkHandler() *handlers.LinkHandler {
	return c.linkHandler
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