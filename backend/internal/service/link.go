package service

import (
	"errors"

	"github.com/google/uuid"
	"github.com/hilmy07/shotlink/backend/internal/models"
	"github.com/hilmy07/shotlink/backend/internal/repository"
)

type LinkService struct {
	repo *repository.LinkRepository
}

func NewLinkService(repo *repository.LinkRepository) *LinkService {
	return &LinkService{repo: repo}
}

func (s *LinkService) CreateLink(originalURL string, slug string, userID int) (models.Link, error) {
	if originalURL == "" {
		return models.Link{}, errors.New("original_url is required")
	}

	// kalau slug kosong → auto generate
	if slug == "" {
		slug = uuid.New().String()[:6]
	} else {
		// cek duplicate slug
		_, err := s.repo.GetBySlug(slug)
		if err == nil {
			return models.Link{}, errors.New("slug already exists")
		}
	}

	link := models.Link{
		OriginalURL: originalURL,
		Slug:        slug,
		UserID:      userID,
	}

	return s.repo.Create(link)
}

func (s *LinkService) GetOriginalURL(slug string) (string, error) {
	link, err := s.repo.GetBySlug(slug)
	if err != nil {
		return "", err
	}
	return link.OriginalURL, nil
}

func (s *LinkService) GetLinkByUserId(userId int) ([]*models.ResponseLinkByUserId, error) {
	return s.repo.GetLinksByUserId(userId)
}

func (s *LinkService) DeleteLink(id int) error {

	return s.repo.DeleteLink(id)
}
