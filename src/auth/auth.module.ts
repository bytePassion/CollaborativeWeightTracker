import {Module} from "@nestjs/common";
import {PassportModule} from '@nestjs/passport';
import {AuthService} from "./auth.service";
import { JwtModule } from '@nestjs/jwt';
import {JwtStrategy} from "./jwt.strategy";

@Module({
    imports: [
        PassportModule.register({defaultStrategy: 'jwt'}),
        JwtModule.register({
            secretOrPrivateKey: 'secretKey',
            signOptions: {
                expiresIn: 3600
            }
        })
    ],
    providers: [AuthService, JwtStrategy]
})
export class AuthModule {}