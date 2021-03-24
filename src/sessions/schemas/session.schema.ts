import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Participant } from './participant.schema';

@Schema()
export class Session extends Document {
  @Prop()
  time: number;

  @Prop()
  status: number;

  @Prop([Participant])
  participants: Participant[];
}

export const SessionSchema = SchemaFactory.createForClass(Session);
