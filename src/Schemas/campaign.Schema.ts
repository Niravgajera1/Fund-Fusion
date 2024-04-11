import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Campaign extends Document {
  @Prop({ required: true })
  yourname: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true, unique: true })
  title: string;

  @Prop({ required: true })
  story: string;

  @Prop({ required: true })
  goal: number;

  @Prop({ required: true })
  enddate: Date;

  @Prop()
  image: File;
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);