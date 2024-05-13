import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../Schemas/auth.Schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Import ConfigModule and ConfigService
import { JwtStrategy } from './jwt.strategy';
import { Campaign, CampaignSchema } from 'src/Schemas/campaign.Schema';
import { EmailService } from './email.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        // Fix useFactory
        secret: configService.get<string>('JWT_SECRET'), // Retrieve JWT_SECRET from config
        signOptions: {
          expiresIn: configService.get<string>('JWT_EXPIRES'),
        },
      }),
    }),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Campaign.name,
        schema: CampaignSchema,
      },
    ]),
    ConfigModule.forRoot(), // Import ConfigModule.forRoot()
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, EmailService],
  exports: [JwtStrategy, PassportModule, AuthModule, AuthService],
})
export class AuthModule {}