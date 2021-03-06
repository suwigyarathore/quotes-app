import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { Quote } from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
  quoteGroup: {category: string, quotes: Quote[], icon: string};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private quoteService: QuotesService) {
  }

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  // }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorites(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure to add the quote?',
      buttons: [{
        text: 'Yes, go ahead',
        handler: () => {
          this.quoteService.addQuoteToFavorites(selectedQuote);
        }
      },
        {
          text: 'No, I changed my mind!',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled!');
          }
        }]
    });

    alert.present();
  }

  onRemoveFromFavorites(selectedQuote: Quote) {
    this.quoteService.removeQuoteToFavorites(selectedQuote);
  }

  isFavorite(quote: Quote) {
    return this.quoteService.isQuoteFavorite(quote);
  }
}
