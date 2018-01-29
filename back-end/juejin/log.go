package juejin

import (
	"fmt"
	"log"
	"net/http"
	"time"
)

// Red returns a red string
func Red(message string) string {
	return fmt.Sprintf("\x1b[31m%s\x1b[0m", message)
}

// Blue returns a blue string
func Blue(message string) string {
	return fmt.Sprintf("\x1b[34m%s\x1b[0m", message)
}

// Green returns a green string
func Green(message string) string {
	return fmt.Sprintf("\x1b[32m%s\x1b[0m", message)
}

func Bold(message string) string {
	return fmt.Sprintf("\x1b[1m%s\x1b[21m", message)
}

func init() {
	log.SetFlags(log.LstdFlags | log.Lshortfile)
}

func WriteLog(r *http.Request, t time.Time, match string, pattern string) {
	d := time.Now().Sub(t)

	l := fmt.Sprintf("[ACCESS] | % -10s | % -40s | % -16s | % -10s | % -40s |", Bold(Blue(r.Method)), r.URL.Path, d.String(), Red(match), Green(pattern))

	log.Println(l)
}
