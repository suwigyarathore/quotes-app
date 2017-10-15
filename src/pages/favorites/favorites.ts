import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";
import { QuotesService } from "../../services/quotes";
import { QuotePage } from "../quote/quote";
import { SettingsService } from "../../services/settings";

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];
  constructor(public navCtrl: NavController, public navParams: NavParams ,
  private quoteService: QuotesService, private modalCtrl: ModalController, private settingService: SettingsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: Boolean) => {
      if(remove) {
        this.onRemoveFavoriteQuote(quote);
      }
    })
  }

  onRemoveFavoriteQuote(quote: Quote) {
    this.quoteService.removeQuoteToFavorites(quote);
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

  getBackground() {
    return this.settingService.isAltBackground() ? 'altQuotesBackground': 'quotesBackground';
  }

}
