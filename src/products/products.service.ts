import { Injectable } from "@nestjs/common";


@Injectable()
export class ProductService {
    public products = ["Rice", "Beans", "Maize", "Tomatoes", "Yam"]

    getAllProducts(): string[] {
        return this.products
    }

    getOneProduct(): string[] {
        return this.products
    }

    addProduct(title: string): string {
        this.products.push(title);
        return `Product ${title} added successfully`

    }


}
