import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductService {

  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    @Inject('PRODUCT_SERVICE') private client: ClientProxy
  ) { }

  async create(body: CreateProductDto): Promise<ProductDocument> {
    try {
      return await this.productModel.create(body);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll(): Promise<ProductDocument[]> {
    try {
      let a = this.client.send({ cmd: 'greeting' }, 'Progressive Coder');
      console.log(a)
      return await this.productModel.find({ isDeleted: false }).exec()
    } catch (error) {
      throw new Error(error);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
