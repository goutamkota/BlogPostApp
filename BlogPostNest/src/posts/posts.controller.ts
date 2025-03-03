import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Req } from '@nestjs/common';
import { PostsService } from './posts.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // Public endpoint: Get details of a single post
  @Get(':id')
  async getPost(@Param('id') id: string) {
    return this.postsService.getPostById(id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getUserPosts(@Req() req) {
    const userEmail = req.user.email;
    return this.postsService.getPostsByUser(userEmail);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createPost(@Req() req: any) {
    const createPostDto = req.body
    createPostDto.userEmail = req.user.email
    return this.postsService.createPost(createPostDto);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async updatePost(@Param('id') id: string, @Body() updatePostDto: any) {
    return this.postsService.updatePost(id, updatePostDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deletePost(@Param('id') id: string) {
    return this.postsService.deletePost(id);
  }
}
