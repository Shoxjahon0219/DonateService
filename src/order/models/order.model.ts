import {
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  Model,
  Table,
} from "sequelize-typescript";
import { Shop } from "../../shop/model/shop.model";

interface IOrderCreationAttr {
  sum: number;
  location: string;
  user_id: number;
  shop_id: number;
  status: "pending" | "completed" | "cancelled";
}

@Table({ tableName: "order", freezeTableName: true })
export class Order extends Model<Order, IOrderCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({ type: DataType.DECIMAL, allowNull: false })
  declare sum: number;

  @Column({ type: DataType.STRING, allowNull: false })
  declare location: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  declare user_id: number;

  @ForeignKey(() => Shop)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare shop_id: number;

  @BelongsTo(() => Shop)
  declare shop: Shop;

  @Column({
    type: DataType.ENUM("in_progres", "completed", "cancelled"),
    allowNull: false,
  })
  declare status: "pending" | "completed" | "cancelled";
}
