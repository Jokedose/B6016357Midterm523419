import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service'

@Component({
  selector: "app-second",
  templateUrl: "./second.component.html",
  styleUrls: ["./second.component.css"],
})
export class SecondComponent implements OnInit {
  productForm = new FormGroup({
    type: new FormControl(""),
    id: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
    detail: new FormControl("", [Validators.required]),
    quantity: new FormControl("", [Validators.required, Validators.max(50)]),
    price: new FormControl("", [Validators.required, Validators.max(100000)]),
  });

  get id() {
    return this.productForm.get("id");
  }
  get name() {
    return this.productForm.get("name");
  }
  get detail() {
    return this.productForm.get("detail");
  }
  get quantity() {
    return this.productForm.get("quantity");
  }
  get price() {
    return this.productForm.get("price");
  }

  productType: string[] = ["", "CPU", "RAM", "HDD", "Mainboard"];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  addProduct() {
    
  }
}
