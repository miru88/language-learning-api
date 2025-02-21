import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VocabularyModule } from './vocabulary/vocabulary.module';
import { StoryModule } from './story/story.module';
import { VocabularyStatisticsModule } from './vocabulary_statistics/vocabulary_statistics.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    VocabularyModule, 
    StoryModule, 
    VocabularyStatisticsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'chinese',
      autoLoadEntities: true,
      synchronize: true
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
