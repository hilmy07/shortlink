package handlers

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/hilmy07/shotlink/backend/internal/models"
	"github.com/hilmy07/shotlink/backend/internal/service"
)

type LinkHandler struct {
	service *service.LinkService
}

func NewLinkHandler(service *service.LinkService) *LinkHandler {
	return &LinkHandler{service: service}
}

// Create Shortlink godoc
// @Summary Create new short link
// @Description Create a new short link for a logged-in user
// @Tags Links
// @Accept json
// @Produce json
// @Param request body models.CreateLinkRequest true "Link data"
// @Success 200 {object} map[string]interface{}
// @Failure 400 {object} map[string]string
// @Failure 401 {object} map[string]string
// @Security ApiKeyAuth
// @Router /api/links [post]
func (h *LinkHandler) Create(c *gin.Context) {

	// ambil user_id dari JWT
	userIdVal, exists := c.Get("user_id")
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "unauthorized"})
		return
	}

	userId := userIdVal.(int)

	// bind request (tanpa user_id)
	var req models.CreateLinkRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid request"})
		return
	}

	result, err := h.service.CreateLink(req.OriginalURL, req.Slug, userId)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"success": false,
			"message": "Slug already taken",
			"results": nil,
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"success": true,
		"results": gin.H{
			"id":           result.ID,
			"original_url": result.OriginalURL,
			"slug":         result.Slug,
			"short_url":    "http://localhost:8000/" + result.Slug,
		},
	})
}

// Redirect godoc
// @Summary Redirect to original URL
// @Description Redirects a short link to the original URL
// @Tags Links
// @Produce json
// @Param slug path string true "Short link slug"
// @Success 302 {string} string "redirect"
// @Failure 404 {object} map[string]string
// @Router /{slug} [get]
func (h *LinkHandler) Redirect(c *gin.Context) {
	slug := c.Request.URL.Path[1:]

	if slug == "" {
		c.JSON(404, gin.H{"error": "not found"})
		return
	}

	originalURL, err := h.service.GetOriginalURL(slug)
	if err != nil {
		c.JSON(404, gin.H{"error": "not found"})
		return
	}

	c.Redirect(302, originalURL) 
}

// GetUserLinks godoc
// @Summary Get all links of user
// @Description Retrieve all links created by the logged-in user
// @Tags Links
// @Produce json
// @Success 200 {object} map[string]interface{}
// @Failure 401 {object} map[string]string
// @Security ApiKeyAuth
// @Router /api/links [get]
func (h *LinkHandler) GetUserLinks(c *gin.Context) {
	userIdVal, exists := c.Get("user_id")
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "unauthorized"})
		return
	}

	userId := userIdVal.(int)

	links, err := h.service.GetLinkByUserId(userId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "failed to get links"})
		return
	}

	if links == nil {
		links = []*models.ResponseLinkByUserId{}
	}

	c.JSON(http.StatusOK, gin.H{
		"success": true,
		"data":    links,
	})
}

// DeleteLink godoc
// @Summary Delete a link
// @Description Delete a short link by its ID
// @Tags Links
// @Produce json
// @Param id path int true "Link ID"
// @Success 200 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Security ApiKeyAuth
// @Router /api/links/{id} [delete]
func (h *LinkHandler) DeleteLink(ctx *gin.Context) {
	id, _ := strconv.Atoi(ctx.Param("id"))

	err := h.service.DeleteLink(id)

	if err != nil {
		ctx.JSON(500, gin.H{
			"message": err.Error(),
		})
		return
	}

	ctx.JSON(200, gin.H{
		"message": "link deleted",
	})
}