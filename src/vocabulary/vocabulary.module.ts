import { Global, Module } from '@nestjs/common';
import { VocabularyController } from './vocabulary.controller';
import { VocabularyService } from './vocabulary.service';

@Global()
@Module({
  controllers: [VocabularyController],
  providers: [VocabularyService],
  exports: [VocabularyService]
})
export class VocabularyModule {}
