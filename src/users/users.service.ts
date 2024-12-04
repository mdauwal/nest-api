import { Injectable } from "@nestjs/common";

@Injectable()

export class UserService {
    private users = ["Muhammad", "Moses", "Ahmad", "Yusuf"]

    getUsers(): string[] {
        return this.users
    }
    addUser(name: string): string {
        this.users.push(name);
        return `User ${name} added successfully`

    }
}