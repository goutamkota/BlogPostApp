import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from 'src/typeorm/entities/Blog';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[TypeOrmModule.forFeature([Blog]), AuthModule],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
