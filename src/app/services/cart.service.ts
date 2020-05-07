import { Injectable } from '@angular/core';
import { productsModel } from '../product.model'
import { ProductService } from '../services/product.service'

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartProduct: productsModel = [];
  total: number = 0
  quantity: number;
  counter: number = 0;

  constructor(private productService: ProductService) { }

  add(id: number){
    console.log('Add id:' + id + ' to cart')
    this.cartProduct.push(this.productService.getSomeProducts(id));
    this.total += this.productService.getSomeProducts(id).price;
    this.counter = this.cartProduct.length;
  }

  getCounter() {
    return this.counter;
  }

  getTotal() {
    return this.total;
  }

  getCart() {
    return this.cartProduct;
  }
}
