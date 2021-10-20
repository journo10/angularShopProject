import { Category } from './../../models/category';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  public categories: Category[] = [];
  public activeCategory: Category;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategory();
  }

  //Categories
  getCategory() {
    this.categoryService.getAllCategory().subscribe((data) => {
      this.categories = data;
    });
  }

  //active class
  activeClassCategory(c: Category) {
    if (c == this.activeCategory) {
      return 'list-group-item list-group-item-action bg-dark text-white';
    } else {
      return 'list-group-item';
    }
  }
  //tıklayınca active olur
  activeTiklaCategory(c: Category) {
    this.activeCategory = c;
  }
}
