package main

import (
	"log"
	"net/http"

	"github.com/joho/godotenv"

	"github.com/neilsmahajan/gochat/server/router"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Fatalf("Error loading the .env file: %v", err)
	}

	rtr := router.New()

	log.Print("Server listening on http://localhost:8080")
	if err := http.ListenAndServe("0.0.0.0:8080", rtr); err != nil {
		log.Fatalf("There was an error with the http server: %v", err)
	}
}
