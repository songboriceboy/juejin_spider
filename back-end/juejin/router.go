package juejin

import (
	"encoding/json"
	"net/http"
	"strconv"
)

type Controller struct {
	HandleFunction func(http.ResponseWriter, *http.Request)
	Method         string
	Pattern        string
}

func GetItems(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	keyword := r.Form.Get("keyword")
	page_str := r.Form.Get("page")
	if page_str == "" {
		// w.WriteHeader(403)
		page_str = "1"
	}
	page, err := strconv.Atoi(page_str)
	if ok := ErrorPrint(err); ok {
		w.Header().Set("Content-Type", "application/json")
		items := getItems(keyword, page)
		if items != nil {
			data, err := json.Marshal(items)
			ok = ErrorPrint(err)
			if ok {
				w.Write(data)
			}
		}
	}
	w.Write([]byte(""))
}

func GetSuggestions(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	keyword := r.Form.Get("keyword")
	w.Header().Set("Content-Type", "application/json")
	suggestions := getSuggestions(keyword)
	if suggestions != nil {
		data, err := json.Marshal(suggestions)
		if ok := ErrorPrint(err); ok {
			w.Write(data)
		}
	}
	w.Write([]byte(""))
}
