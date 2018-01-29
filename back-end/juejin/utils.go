package juejin

import (
	"log"
)

// fatal the error then the program will be broken
func ErrorFatal(err error) {
	if err != nil {
		log.Fatal(err)
		return
	}
}


// print the error
func ErrorPrint(err error) bool {
	if err != nil {
		log.Println(err)
		return false
	}
	return true
}
