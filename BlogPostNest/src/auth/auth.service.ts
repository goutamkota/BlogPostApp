import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { UserDetails } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) { }

    async validateUser(details: { email: string; name: string; picture: string }) {
        const { email, name, picture } = details;
        const user = await this.userRepo.findOneBy({ email });
        if (user) {
          return {
            status: true,
            email: user.email,
            name: user.displayName,
            picture: user.displayImage
          };
        }
        const newUser = this.userRepo.create({
          email,
          displayName: name,
          displayImage: picture
        });
    
        const savedUser = await this.userRepo.save(newUser);
        const { id, ...userData } = savedUser;
        return { status: true, ...userData };
      }

}
