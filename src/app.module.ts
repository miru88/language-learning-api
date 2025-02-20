import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VocabularyModule } from './vocabulary/vocabulary.module';
import { StoryModule } from './story/story.module';
import { VocabularyStatisticsModule } from './vocabulary_statistics/vocabulary_statistics.module';

@Module({
  imports: [VocabularyModule, StoryModule, VocabularyStatisticsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
