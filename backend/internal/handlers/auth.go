package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/hilmy07/shotlink/backend/internal/models"
	"github.com/hilmy07/shotlink/backend/internal/service"
)

type AuthHandler struct {
	service *service.AuthService
}

func NewAuthHandler(service *service.AuthService) *AuthHandler {
	return &AuthHandler{service: service}
}

// AuthLogin godoc
// @Summary Login user
// @Description Login user dengan email & password
// @Tags Auth
// @Accept json
// @Produce json
// @Param request body models.RequestLogin true "Login credentials"
// @Success 200 {object} map[string]interface{}
// @Failure 401 {object} map[string]string
// @Router /api/login [post]
func (h *AuthHandler) AuthLogin(ctx *gin.Context) {

	req := models.RequestLogin{}

	ctx.ShouldBindJSON(&req)

	user, token, err := h.service.Login(req.Email, req.Password)

	if err != nil {
		
		ctx.JSON(http.StatusUnauthorized, gin.H{
			"message": "login failed",
		})
		return
	}

	ctx.JSON(200, gin.H{
	"success": true,
	"message": "Login successfull",
	"result": gin.H{
		"token": token,
		"user": gin.H{
			"id":    user.Id,
			"email": req.Email,
		},
	},
})
}

// AuthRegister godoc
// @Summary Register user
// @Description Register user baru
// @Tags Auth
// @Accept json
// @Produce json
// @Param request body models.CreateUserRequest true "User registration data"
// @Success 201 {object} map[string]interface{}
// @Failure 400 {object} map[string]string
// @Router /api/register [post]
func (h *AuthHandler) AuthRegister(ctx *gin.Context) {

	req := models.CreateUserRequest{}

	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(400, gin.H{
			"message": "invalid request",
		})
		return
	}

	err := h.service.Register(req)

	if err != nil {
		ctx.JSON(400, gin.H{
			"message": err.Error(),
		})
		return
	}

	ctx.JSON(201, gin.H{
		"success": true,
		"message": "register success",
	})
}
