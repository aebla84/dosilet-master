import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Subcategory } from '../model/subcategory';
import 'rxjs/add/operator/map';

@Injectable()
export class Category {
  count_products: number;
  description: string;
  name: string;
  parent: number;
  parent_name: string;
  slug: string;
  subtitle: string;
  term_id: number;
  products: Array<Product>

  subcategories: Array<Subcategory>
  showSubcategories: Boolean;

  constructor(data: {count_products: number } & {description: string } & { name: string } & { parent: number } & { parent_name: string } & { slug: string } & { subtitle: string } & { term_id: number }
    & { showSubcategories: Boolean } &   {products: Array<Product>} ) {

    this.count_products = data.count_products;
    this.description = data.description;
    this.name = data.name;
    this.parent = data.parent;
    this.parent_name = data.parent_name;
    this.slug = data.slug;
    this.subtitle = data.subtitle;
    this.term_id = data.term_id;

    this.subcategories = [];
    this.showSubcategories = true;
  }
}
