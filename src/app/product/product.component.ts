import { Component, Input } from '@angular/core';
import { Product , products} from '../products';
import { CartService } from '../cart.service';
import { MessageService } from "primeng/api";
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [MessageService]
})
export class ProductComponent {
  
  constructor(
    private cartService:CartService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
    ){}


  addToCart(product: Product) {
        this.cartService.addToCart(product);
        window.alert("Se agrega al carrito de compras")
   }

   ngOnInit() {
    this.primengConfig.ripple = true;
  }

  products = products;
  @Input() product!:Product;
  
  share() {
    window.alert('El producto ha sido compartido');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  
  display: boolean = false;
	showDialog() {
        this.display = true;
      }



}
