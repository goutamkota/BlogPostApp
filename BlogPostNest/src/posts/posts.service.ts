import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from 'src/typeorm/entities/Blog';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
  ) {}

  async getPostById(id: string): Promise<Blog | null> {
    return await this.blogRepository.findOne({ where: { id } });
  }

  async getPostsByUser(userEmail: string): Promise<Blog[]> {
    return await this.blogRepository.find({ where: { userEmail } });
  }

  async createPost(createPostDto: any) {
    const newPost = this.blogRepository.create({
      ...createPostDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return await this.blogRepository.save(newPost);
  }

  async updatePost(id: string, updatePostDto: any): Promise<Blog | null | any> {
    const updatedPost = await this.blogRepository.update(id, { ...updatePostDto, updatedAt: new Date() });
    console.log(updatedPost, 'update')
    if(updatedPost.affected == 1) return { msg : 'Successfully updated!'}
    return new UnauthorizedException('Unable to update!')
  }

  // ✅ Delete a post
  async deletePost(id: string): Promise<Blog | null | any> {
    const post = await this.getPostById(id);
    if (post) {
      await this.blogRepository.delete(id);
      return post;
    }
    // return null
    return new NotFoundException({ msg: 'Unable to delete!'})
  }
}
