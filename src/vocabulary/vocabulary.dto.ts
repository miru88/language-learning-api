import { IsInt, IsString } from 'class-validator';

export class CreateVocabularyDto {

  @IsString()
  chinese: string;

  @IsString()
  pinyin: string;

  @IsString()
  english: string;

  @IsInt()
  number: number;
}
