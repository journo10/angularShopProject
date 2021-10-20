import { ToastrService } from 'ngx-toastr';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  //products
  public products: Product[] = [];
  //toplam fiyat
  public grandTotal: number;
  constructor(private cardService: CardService,private toastrService:ToastrService) {}

  ngOnInit(): void {
    this.cardService.getProducts().subscribe((data)=>{
      this.products = data;

       //toplam fiyat kısmı
       this.grandTotal = this.cardService.getTotalPrice();
    })
  }

    //Ürün Sil
    removeItem(p:Product){
      this.cardService.removeCardItem(p)
      this.toastrService.error('Ürün silindi.')
    }
  
    //Tüm Ürünleri Sil
    removeAllCard(){
      this.cardService.removeAllCard();
      this.toastrService.error('Ürünlerin hepsi silindi.')
    }
}
