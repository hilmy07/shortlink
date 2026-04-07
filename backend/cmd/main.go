package main

import (
	"os"

	con "github.com/hilmy07/shotlink/backend/internal/di"

	"github.com/gin-gonic/gin"
	routes "github.com/hilmy07/shotlink/backend/internal/router"
	"github.com/joho/godotenv"
)

func main() {

	godotenv.Load()

	db, err := con.Connect()

	if err != nil {
		panic(err)
	}

	r := gin.Default()

	routes.SetupRoutes(r, db)

	port := os.Getenv("PORT")

	r.Run(":" + port)
}


