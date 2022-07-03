import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { Utility } from "src/utility/utility.service";

@Schema({ _id: false })
class PriceDetails {
    @Prop({ type: Number, default: 0 })
    price: number

    @Prop({ type: Number, default: 0 })
    discount: number

    @Prop({ type: Number, default: 0 })
    discountedPrice?: number
}

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {

    @Prop({ required: true, type: String })
    name: string

    @Prop({ type: PriceDetails })
    priceDetails: PriceDetails;

    @Prop({ required: true, type: String })
    category: string

    @Prop({ default: 0, type: Number })
    quantity: number

    @Prop({ default: false, type: Boolean })
    isDeleted: boolean

    @Prop({ default: null, type: String })
    slug: string
}

export const ProductSchema = SchemaFactory.createForClass(Product)

ProductSchema.pre('save', function (next) {
    const utility = new Utility()
    if (this.name) {
        this.name = this.name.toLowerCase();
        this.slug = utility.convertToSlug(this.name)
    }

    if (this.priceDetails) {
        let countDiscount = this.priceDetails.price * this.priceDetails.discount
        let discountPrice = this.priceDetails.price - countDiscount
        this.priceDetails.discountedPrice = discountPrice
    }
    next();
})

ProductSchema.pre('updateOne', function (next) {
    const utility = new Utility()
    if (this.name) {
        this.name = this.name.toLowerCase();
        this.slug = utility.convertToSlug(this.name)
    }

    if (this.priceDetails) {
        let countDiscount = this.priceDetails.price * this.priceDetails.discount
        let discountPrice = this.priceDetails.price - countDiscount
        this.priceDetails.discountedPrice = discountPrice
    }
    next();
})