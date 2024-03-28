import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CampaignModule } from './campaign/campaign.module';

const DBURL: string =
  'mongodb+srv://niravpatelpc:7359965@nest.riw7o.mongodb.net/';

@Module({
  imports: [MongooseModule.forRoot(DBURL), AuthModule, CampaignModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
