import { Category } from './../../models/category';
import { CategoryService } from './../../services/category.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;
  ProductMdl: Product[];
  categories: Category[] = [];
  categoryId: ''; //Seçiniz kısmı görünmesi için.

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.createProductAddForm();
    this.getByCategoryId();
  }

  //Form
  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }

  //Product ekleme,click
  addProduct() {
    if (this.productAddForm.valid) {
      let ProductMdl = Object.assign({}, this.productAddForm.value);
      this.productService.addAllProduct(ProductMdl).subscribe(
        (data) => {
          this.toastrService.success('Ürün eklendi...');
          this.router.navigate(['/products']);
          console.log(data);
        },
        (err) => {
          console.log(err.error.message);
        }
      );
    } else {
      this.toastrService.error('Bilgiler eksik formu tekrar doldurunuz.');
    }
  }

  //CategoryId
  getByCategoryId() {
    this.categoryService.getAllCategory().subscribe((data) => {
      this.categories = data;
    });
  }
}
