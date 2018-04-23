import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { IProduct } from './product';
// import { ProductService } from './product.service';

@Component({
    templateUrl: './app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        // this is now used since the data is being fetched by the route resolver.
        this.product = this.route.snapshot.data['product'];

        // no longer needed since adding in route resolver.
        // let id = +this.route.snapshot.params['id'];
        // this.getProduct(id);
    }

    // no longer needed since adding in route resolver.
    // getProduct(id: number) {
    //     this.productService.getProduct(id).subscribe(
    //         product => this.product = product,
    //         error => this.errorMessage = <any>error);
    // }
}
