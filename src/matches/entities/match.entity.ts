import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';
import { PlayerSide, TimeoutSide } from 'src/match-events/entities/enums';
export type MatchDocument = HydratedDocument<Match>;

/**
 * The idea behind a match player is to have a object that we can use to identify a player in a match.
 * It should not require that the player is known at the time of creating the match, since some tournaments
 * might not have multiple stages and the players in the final match might not be known.
 */
export class MatchPlayer {
    @ApiProperty({
        description: 'This is how we identify the player in the match.',
        examples: ['A', 'B', 'C', 'Z', 'Y', 'X'], 
        default: 'A',
    })
    @Prop({ required: true, })
    key: string;


    @ApiProperty({enum: PlayerSide})
    @Prop({ required: true, enum: Object.values(PlayerSide) })
    side: PlayerSide;

    @ApiProperty({
        description: 'How should the player be displayed in the match. If missing, the matchPlayerId should be used.',
        required: false,
        default: null,
    })
    @Prop({ required: false })
    displayName?: string;

    @ApiProperty({
        description: 'The id of the player in the tournament. Only set when it is known which player is playing in the match. Can be left empty outside of a tournament context',
        required: false,
        default: null
    })
    @Prop({ required: false })
    tournamentPlayerId?: string; 
}

@Schema()
export class Match {
    @Prop()
    displayName: string;
    @Prop({ type: [MatchPlayer], required: true })
    players: MatchPlayer[];
}

export const MatchSchema = SchemaFactory.createForClass(Match);