import { Component } from '@angular/core';
import { Settings } from './dto/pagination.dto';
import { Product } from './dto/product.dto';
import { BehaviorSubject, Observable, concatMap, map, scan, takeWhile } from 'rxjs';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  settings: Settings = {limit:12, skip: 0};
  settings$: BehaviorSubject<Settings> = new BehaviorSubject(this.settings);
  products$: Observable<Product[]>;
  constructor(private productService: ProductService) {
    this.products$ = this.getProducts();
  }
// mergeMap
// concatMap
// switchMap
  getProducts(): Observable<Product[]> {
    // setting1 setting2 setting3 setting4
    return this.settings$.pipe(
      concatMap((setting) => this.productService.getProducts(setting)),
      // apiResponse
      map((response) => response.products),
      // products
      takeWhile((response) => !!response.length),
      scan((oldProducts, newProduit) => [...oldProducts, ...newProduit])
    );
  }
  
  more() {
    this.settings.skip += this.settings.limit;
    this.settings$.next(this.settings);
  }
}
