import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product} from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent{

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Su producto ha sido agregado al carrito!');
  }

}
