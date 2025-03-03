import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { UserDetails } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) { }

    async validateUser(details: any) {
        const {email, name, picture} = details
        const user = await this.userRepo.findOneBy({ email })
        if (user) return user
        const insertDetails = {
            email,
            displayName: name,
            displayImage: picture
        }
        const newUser = this.userRepo.create(insertDetails);
        return this.userRepo.save(newUser)
    }

}
