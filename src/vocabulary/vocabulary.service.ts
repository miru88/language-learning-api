import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vocabulary } from './vocabulary.entity';

@Injectable()
export class VocabularyService {
    constructor(
        @InjectRepository(Vocabulary)
        private readonly vocabularyRepository: Repository<Vocabulary>,
      ) {}



    async getAllVocabulary(): Promise<Vocabulary[]>{

        const allVocabulary: Vocabulary[] = await this.vocabularyRepository.find({order: { band: 'ASC', number: 'ASC'  }});

        return allVocabulary === null ? [] : allVocabulary;
    }
}
