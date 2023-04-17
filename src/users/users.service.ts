import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) { }

    async findByEmail(email: string) {
        const user = await this.prisma.user.findFirst({
            where: {
                email
            }
        })

        return user;
    }


    async create(userDto: CreateUserDto) {

        const data = {
            ...userDto,
            admin: userDto.isAdmin
        }

        delete data.isAdmin

        const user = await this.prisma.user.create({
            data
        })

        delete user.password

        return user
    }

    async findAll(search?) {

        const users = await this.prisma.user.findMany({
            where: {
                name: search
            }
        });

        return users;
    }

}