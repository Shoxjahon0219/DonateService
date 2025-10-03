import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsString } from "class-validator";

enum Statuses {
  PENDING = "pending",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export class CreateOrderDto {
  @ApiProperty({
    example: 200,
    description: "Total sum of the order",
  })
  @IsNumber({}, { message: "sum must be a number" })
  sum: number;

  @ApiProperty({
    example: "New York, 5th Avenue 12",
    description: "Delivery address or location",
  })
  @IsString({ message: "location must be a string" })
  location: string;

  @ApiProperty({
    example: 1,
    description: "User ID who created the order",
  })
  @IsNumber({}, { message: "user_id must be a number" })
  user_id: number;

  @ApiProperty({
    example: 2,
    description: "Shop ID of the ordered product",
  })
  @IsNumber({}, { message: "shop_id must be a number" })
  shop_id: number;

  @ApiProperty({
    example: "pending",
    description: "Order status",
    enum: Statuses,
  })
  @IsEnum(Statuses, {
    message: "status must be pending, completed or cancelled",
  })
  status: Statuses;
}
