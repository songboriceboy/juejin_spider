package juejin

import (
	"context"
	"github.com/olivere/elastic"
)

// the elastic's index is juejin

// the struct of suggest in article type
type Suggest struct {
	Weight int      `json:"weight"`
	Input  []string `json:"input"`
}

// the main struct of article type
type JueJin struct {
	Title           string     `json:"title"`
	ViewsCount      int        `json:"views_count"`
	CreatedDate     string     `json:"created_date"`
	Tags            string     `json:"tags,omitempty"`
	URL             string     `json:"url"`
	CollectionCount int        `json:"collection_count"`
	Content         string     `json:"content"`
	CommentsCount   int        `json:"comments_count"`
	Suggest         *[]Suggest `json:"suggest,omitempty"`
}

// declare the context
var ctx = context.Background()

// get the elastic client on a default port
var client, _ = elastic.NewClient()

// get the article items from the elastic server
func getItems(keyword string, page int) *elastic.SearchHits {
	// search result from the tags,title,content of the article item
	query := elastic.NewMultiMatchQuery(keyword, "tags", "title", "content")
	result, err := client.Search().
			Index("juejin").
			Query(query).
			From((page - 1) * 10).Size(10).
			Do(ctx)
	if ok := ErrorPrint(err); ok {
		return result.Hits
	}
	return nil
}

// get the suggestions from elastic server
// when user input the data to the search_box
func getSuggestions(keyword string) elastic.SearchSuggest {
	if keyword == "" {
		keyword = " "
	}
	suggest := elastic.NewCompletionSuggester("my_suggest").
			Text(keyword).
			Field("suggest").
			Fuzziness(2).
			Size(10)
	result, err := client.Search().Index("juejin").Suggester(suggest).Do(ctx)
	if ok := ErrorPrint(err); ok {
		return result.Suggest
	}
	return nil
}
