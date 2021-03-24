import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../../users/schemas/user.schema';

@Schema()
export class Participant extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop()
  stars: number;

  @Prop()
  feedback: string;
}

export const ParticipantSchema = SchemaFactory.createForClass(Participant);
