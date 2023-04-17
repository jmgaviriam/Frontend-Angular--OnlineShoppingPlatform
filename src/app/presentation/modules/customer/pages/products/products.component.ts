import { Component } from '@angular/core';
import { ProductModel } from 'src/app/domain/models/product.model';
import { GetProductsByStoreUseCase } from '../../../../../domain/use-cases/product/get-products-by-store.usecase';

@Component({
  selector: 'sofka-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  storeId: string | null = localStorage.getItem('storeId');
  productsList: ProductModel[] = [];

  constructor(private getProductsByStore: GetProductsByStoreUseCase) {}

  ngOnInit(): void {
    if (this.storeId) {
      this.getProductsByStore.execute(this.storeId).subscribe({
        next: (products: ProductModel[]) => {
          this.productsList = products;
          console.log(this.productsList);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('Complete');
        },
      });
    }
  }
}
