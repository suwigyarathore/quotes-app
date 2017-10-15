import { Quote } from "../data/quote.interface";
export class QuotesService {
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorites(quote: Quote) {
      this.favoriteQuotes.push(quote);
      console.log(this.favoriteQuotes);
    }

    removeQuoteToFavorites(quote: Quote) {
       let filteredQuotes = this.favoriteQuotes.filter((currentQuote: Quote)=> quote.id != currentQuote.id);
       this.favoriteQuotes = [...filteredQuotes];
    }

    getFavoriteQuotes(): Quote[] {
        return [...this.favoriteQuotes];
    }

    isQuoteFavorite(quote: Quote) {
        return this.favoriteQuotes.find((quoteEl: Quote) => {
            return quoteEl.id === quote.id;
        })
    }
}