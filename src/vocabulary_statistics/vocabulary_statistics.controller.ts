import { Controller } from '@nestjs/common';

@Controller('vocabulary-statistics')
export class VocabularyStatisticsController {}



// #### Public Endpoints
// - `GET /statistics/words/:wordId` - Get how often a word appears in stories
// - `GET /statistics/grammar/:grammarPoint` - Get statistics on grammar usage in stories

// #### User-Specific Endpoints
// - `GET /users/:userId/statistics` - Get a user’s vocabulary learning progress
// - `GET /users/:userId/statistics/words` - Get word exposure frequency for a user
// - `GET /users/:userId/statistics/stories` - Get stats on stories read/generated by the user