import { Injectable } from "@nestjs/common";


@Injectable()
export class ProductService {
    public crops = ["Rice", "Beans", "Maize", "Tomatoes", "Yam"]

    getCrops(): string {
        return ""
    }

    addCrops(): string {
        return ""
    }


}
