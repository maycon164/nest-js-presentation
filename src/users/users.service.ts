import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import usersMock from './mockuser';
@Injectable()
export class UsersService {

  private repo: User[] = usersMock;

  create(createUserDto: CreateUserDto) {

    const dataToSave = {
      id: this.repo.length,
      name: createUserDto.name,
      email: createUserDto.email,
      isAdmin: false
    }

    if (createUserDto.email.includes('@e-core.com')) dataToSave["isAdmin"] = true

    this.repo.push(dataToSave);

    return 'User Saved Successfully'
  }

  findAll(query?: string) {

    if (query) return this.repo.filter(user => user.name.includes(query) || user.email.includes(query))

    return this.repo;

  }
}
