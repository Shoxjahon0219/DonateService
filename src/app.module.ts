import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { RecipientModule } from './recipient/recipient.module';
import { CardModule } from './card/card.module';
import { SocialMediaModule } from './social-media/social-media.module';
import { RecipientSocialModule } from './recipient-social/recipient-social.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: true,
      logging: false,
    }),
    RecipientModule,
    CardModule,
    SocialMediaModule,
    RecipientSocialModule,
    AdminModule,
    AuthModule,
  ],
})
export class AppModule {}
