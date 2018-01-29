package main

import (
	"log"
	"net/http"
	"regexp"
	"time"
	"pedro/back-end/server/juejin"
	"html/template"
	"os"
	"path/filepath"
	"fmt"
)

const (
	port = 3000
)

var wd, _ = os.Getwd()
var mux []juejin.Controller

func DefaultPage(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles(filepath.Join(wd, "view/index.html"))
	if err != nil {
		w.WriteHeader(403)
		return
	}
	err = tmpl.Execute(w, nil)
	if err != nil {
		w.WriteHeader(403)
		return
	}
}

func Static(w http.ResponseWriter, r *http.Request) {
	path := filepath.Join(wd, r.URL.Path)
	http.ServeFile(w, r, path)
}

func init() {
	mux = append(mux, juejin.Controller{juejin.GetItems, "GET", "^/api/getItems"})
	mux = append(mux, juejin.Controller{juejin.GetSuggestions, "GET", "^/api/getSuggestions"})
	mux = append(mux, juejin.Controller{Static, "GET", "^/static/"})
	mux = append(mux, juejin.Controller{DefaultPage, "GET", "^/"})
}

type httpHandler struct{}

func (*httpHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	t := time.Now()
	for _, controller := range mux {
		if ok, _ := regexp.MatchString(controller.Pattern, r.URL.Path); ok {
			if r.Method == controller.Method {
				controller.HandleFunction(w, r)
				go juejin.WriteLog(r, t, "matched", controller.Pattern)
				return
			}
		}
	}
	go juejin.WriteLog(r, t, "unmatch", r.URL.Path)
	return
}

func main() {
	server := http.Server{
		Addr:         fmt.Sprintf(":%d", port),
		Handler:      &httpHandler{},
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 5 * time.Second,
	}
	log.Printf("listening at http://localhost:%d", port)
	juejin.ErrorFatal(server.ListenAndServe())
}
