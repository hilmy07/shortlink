package routes

import (
	"github.com/gin-gonic/gin"
	container "github.com/hilmy07/shotlink/backend/internal/di"
	"github.com/hilmy07/shotlink/backend/internal/middleware"
	"github.com/jackc/pgx/v5/pgxpool"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"

	_ "github.com/hilmy07/shotlink/backend/docs"
)

// @title           Backend Shortlink
// @version         1.0

// @host      localhost:8000
// @BasePath  /

// @securityDefinitions.apikey ApiKeyAuth
// @in header
// @name Authorization
func SetupRoutes(r *gin.Engine, db *pgxpool.Pool) {

	c := container.NewContainer(db)

	authHandler := c.AuthHandler()
	linkHandler := c.LinkHandler()

	r.Use(middleware.CorsMiddleware())

	r.POST("/api/register", authHandler.AuthRegister)
	r.POST("/api/login", authHandler.AuthLogin)

	r.GET("/api/links", middleware.AuthMiddleware(), linkHandler.GetUserLinks)
	r.DELETE("/api/links/:id", middleware.AuthMiddleware(), linkHandler.DeleteLink)

	r.POST("/api/links", linkHandler.Create)
	r.GET("/:slug", linkHandler.Redirect) 

	r.GET("/docs/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
}


