import { IsInt, IsNotEmpty, IsString, Length, Max, Min } from "class-validator";

export class CreatePollDto {
  @IsString()
  @Length(1, 100)
  @IsNotEmpty()
  question: string;

  @IsInt()
  @Min(1)
  @Max(10)
  @IsNotEmpty()
  votesPerUser: number;

  @IsString()
  @IsNotEmpty()
  @Length(1, 25)
  name: string;
}

export class JoinPollDto {
  @IsString()
  @IsNotEmpty()
  @Length(8, 8)
  pollID: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 25)
  name: string;
}