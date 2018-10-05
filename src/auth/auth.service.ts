import {Injectable} from "@nestjs/common";
import {JwtPayload} from "./interfaces/jwt-payload.interface";

@Injectable()
export class AuthService {

    validateUser(payload: JwtPayload): Promise<any> {
        return Promise.resolve({});
    }
}