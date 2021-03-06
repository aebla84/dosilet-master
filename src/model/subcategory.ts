import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable()
export class Subcategory {
  count_products: number;
  description: string;
  name: string;
  parent: number;
  parent_name: string;
  slug: string;
  subtitle: string;
  term_id: number;
  products: Array<Product>

  constructor(origin: string, data: { count_products: number } & { description: string } & { name: string  } & { parent: number } & {  parent_name: string } & { slug: string } & {  subtitle: string } & {  term_id: number }
    & { products: Array<Product> }) {

    this.count_products = data.count_products;
    this.description = data.description;
    this.name = data.name;
    this.parent = data.parent;
    this.parent_name = data.parent_name;
    this.slug = data.slug;
    this.subtitle = data.subtitle;
    this.term_id = data.term_id;

    this.products = [];

    if (data.count_products > 0 && origin == "categoryPage") {

      let product = data.products;
      Object.keys(product).forEach(prod => {
        //this.products.push(new Product(product[prod], ));
      });
    }
  }
}
