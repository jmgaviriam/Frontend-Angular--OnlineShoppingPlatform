import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store/store.service';
import { ProductModel } from 'src/app/domain/models/product.model';
import { StoreModel } from 'src/app/domain/models/store.model';
import { GetProductsByStoreUseCase } from 'src/app/domain/use-cases/product/get-products-by-store.usecase';
import { GetStoresUseCase } from 'src/app/domain/use-cases/store/get-stores.usecase';
import { CreateProduct } from 'src/app/data/DTO/product/create-product';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UpdateProductUseCase } from 'src/app/domain/use-cases/product/update-product.usecase';
import { CreateProductUseCase } from 'src/app/domain/use-cases/product/create-product.usecase';
import { UpdateProduct } from 'src/app/data/DTO/product/update-product';

@Component({
  selector: 'sofka-adm-store',
  templateUrl: './adm-store.component.html',
  styleUrls: ['./adm-store.component.scss'],
})
export class AdmStoreComponent implements OnInit {
  storesList: StoreModel[] = [];
  store: StoreModel;
  productsList: ProductModel[] = [];
  isLoading = true;
  form: FormGroup;
  editForm: FormGroup;
  product: CreateProduct;

  showEditForm = false;
  selectedProductId: string = '';

  constructor(
    private fb: FormBuilder,
    private storeService: StoreService,
    private getStores: GetStoresUseCase,
    private getProductsByStore: GetProductsByStoreUseCase,
    private createProduct: CreateProductUseCase,
    private updateProduct: UpdateProductUseCase
  ) {
    this.store = {
      storeId: '',
      userId: '',
      name: '',
      description: '',
      logo: '',
    };

    this.product = {
      storeId: '',
      name: '',
      description: '',
      image: '',
      price: 0,
      quantity: 0,
    };

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
    });

    this.editForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.getStores.execute().subscribe({
        next: (stores: StoreModel[]) => {
          this.storesList = stores;

          for (const store of this.storesList) {
            if (store.userId === userId) {
              this.store = store;
              break;
            }
          }

          if (!this.store) {
            this.store = {
              storeId: '',
              userId: '',
              name: '',
              description: '',
              logo: '',
            };
          }

          if (this.store) {
            this.getProductsByStore.execute(this.store.storeId).subscribe({
              next: (products: ProductModel[]) => {
                const newProductsList: ProductModel[] = [];
                products.forEach((product: ProductModel) => {
                  newProductsList.push(product);
                });
                this.productsList = newProductsList;
              },
              error: (err) => {
                console.log(err);
              },
              complete: () => {
                this.isLoading = false;
                console.log(this.productsList);
              },
            });
          }
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('Complete');
          console.log(this.store.storeId);
        },
      });
    }
  }

  addProduct() {
    if (this.form.valid) {
      this.product = {
        storeId: this.store.storeId,
        name: this.form.value.name,
        description: this.form.value.description,
        image: this.form.value.image,
        price: this.form.value.price,
        quantity: this.form.value.quantity,
      };

      this.createProduct.execute(this.product).subscribe({
        next: (product: CreateProduct) => {
          console.log(product);
        },
      });
    }
  }

  editProduct(product: UpdateProduct) {
    this.showEditForm = true;
    this.selectedProductId = product.productId;
    // Buscar el índice del producto en la lista de productos
    const index = this.productsList.findIndex(
      (p) => p.productId === product.productId
    );
    this.editForm.setValue({
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
      quantity: product.quantity,
    });
  }

  updateProductF() {
    if (this.editForm.valid) {
      const updatedProduct: UpdateProduct = {
        productId: this.selectedProductId,
        storeId: this.store.storeId,
        name: this.editForm.value.name,
        description: this.editForm.value.description,
        image: this.editForm.value.image,
        price: this.editForm.value.price,
        quantity: this.editForm.value.quantity,
      };
      console.log(updatedProduct);
      this.updateProduct.execute(updatedProduct).subscribe({
        next: (product: CreateProduct) => {
          console.log('Product updated:', product);
          this.showEditForm = false;
        },
        error: (err: any) => {
          console.log('Error updating:', err);
        },
      });
    }
    location.reload();
  }
}
