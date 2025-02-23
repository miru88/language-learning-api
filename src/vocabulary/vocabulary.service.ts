import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vocabulary } from './vocabulary.entity';
import { CreateVocabularyDto } from './vocabulary.dto';

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

    async getOneVocabularyWord(vocabId: number): Promise<Vocabulary> {
        return await this.vocabularyRepository.findOne({ where: { id: vocabId } });
    }

    async getRandomVocabularyWord(): Promise<Vocabulary> {

        const minMax = await this.vocabularyRepository
        .createQueryBuilder()
        .select('MIN(id)', 'min')
        .addSelect('MAX(id)','max')
        .getRawOne();

        if (!minMax) return null;

        const randomId = Math.floor(Math.random() * (minMax.max - minMax.min + 1)) + minMax.min;

        return this.vocabularyRepository.findOne({ where: { id: randomId } });
    }

    async addNewWord(newWord: Partial<Vocabulary>): Promise<void> {

        const createdWord: Partial<Vocabulary> = this.vocabularyRepository.create(newWord);
        createdWord.band = 'CUSTOM';

        await this.vocabularyRepository.save(createdWord);
    }
}
