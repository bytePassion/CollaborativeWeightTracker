import {Injectable} from "@nestjs/common";
import {JwtPayload} from "./interfaces/jwt-payload.interface";
import {JwtService} from "@nestjs/jwt";
import {LoginInformation} from "../graphql.schema";

@Injectable()
export class AuthService {

    constructor(private readonly jwtService: JwtService) {
    }

    validateUser(payload: JwtPayload): Promise<any> {
        return Promise.resolve({mail: payload.email});
    }

    async createToken(email: string): Promise<LoginInformation> {
        const user: JwtPayload = {email: email};
        const accessToken = await this.jwtService.sign(user);
        console.log(accessToken);
        return {token: accessToken};
    }
}