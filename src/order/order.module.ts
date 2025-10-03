import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Order } from "./models/order.model";
import { Shop } from "../shop/model/shop.model";

@Module({
  imports: [SequelizeModule.forFeature([Order, Shop])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
