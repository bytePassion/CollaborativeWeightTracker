import {Query} from "@nestjs/common";
import {LoginInformation} from "../graphql.schema";
import {Resolver, Args, Mutation} from "@nestjs/graphql";
import {AuthService} from "./auth.service";


@Resolver('LoginInformation')
export class AuthResolvers {
    constructor(private authService: AuthService){}

    @Mutation('login')
    async login(@Args('email')email: string): Promise<LoginInformation> {
        return await this.authService.createToken(email);
    }
}
