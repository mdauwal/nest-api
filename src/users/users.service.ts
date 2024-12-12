 import { Injectable } from "@nestjs/common";
 import { User } from "src/entities/user.entity";
 import { InjectRepository } from "@nestjs/typeorm";
 

@Injectable()

export class UserService {

    

    public users = ["Muhammad", "Moses", "Ahmad", "Yusuf"]

    getAllUsers(): string[] {
        return this.users
    }
    getOneUser(): string[] {
        return this.users
    }

    addUser(name: string): string {
        this.users.push(name);
        return `User ${name} added successfully`

    }
    
}