package main

import (
	"net/http"
	"quizr/server"
)

func main() {
	router := server.NewRouter()

	http.ListenAndServe(":8080", router)
}

