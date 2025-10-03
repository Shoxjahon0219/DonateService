import { Module } from "@nestjs/common";
import { ShopService } from "./shop.service";
import { ShopController } from "./shop.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Shop } from "./model/shop.model";
import { Category } from "../category/models/category.model";

@Module({
  imports: [SequelizeModule.forFeature([Shop, Category])],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule {}
