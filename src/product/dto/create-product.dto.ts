import { IsOptional } from "class-validator";

export class PriceDetailsDto {
    price: number;
    discount: number;
}


export class CreateProductDto {
    name: string;
    priceDetails: PriceDetailsDto
    category: string;
}
