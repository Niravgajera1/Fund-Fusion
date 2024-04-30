import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Campaign } from './campaign.Schema';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  confirmpassword: string;

  @Prop()
  PasswordReserToken: string;

  @Prop()
  TokenExpiresIn: Date;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Campaign' }] })
  contributedCampaigns: {
    campaignId: string;
    name: string;
    donationAmount: number;
  }; // Assuming campaign IDs are strings

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Campaign' }] })
  createdCampaigns: {
    campaignId: string;
    title: string;
    goalAmount: number;
  };
}

export const UserSchema = SchemaFactory.createForClass(User);