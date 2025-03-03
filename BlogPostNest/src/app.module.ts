import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';
import { User } from './typeorm/entities/User';
import { PassportModule } from '@nestjs/passport';
import { Blog } from './typeorm/entities/Blog';

@Module({
  imports: [
    PostsModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [User, Blog],
      synchronize: true
    }),
    PassportModule.register({ session: true })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
