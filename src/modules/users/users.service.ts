import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize/dist';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userModel.create<User>(createUserDto as any);
  }

  findAll() {
    return this.userModel.findAll();
  }

  findOne(id: number) {
    return this.userModel.findOne<User>({ where: { id } });
  }

  findEmail(email: string) {
    console.log(email);
    return this.userModel.findOne<User>({ where: { email } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.update<User>(updateUserDto, {
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.userModel.destroy<User>({
      where: {
        id,
      },
      force: true,
    });
  }
}
