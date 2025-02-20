import { Controller, Get, Post, Delete } from '@nestjs/common';

@Controller('vocabulary')
export class VocabularyController {

@Get()
getAllVocabulary() {}

@Get()
getOneVocabularyWord() {}

@Get()
getRandomVocabularyWord() {}

@Post()
addWords() {}



}

// #### Public Endpoints
// - `GET /vocabulary` - Get a list of words (filter by difficulty, frequency, HSK level, etc.)
// - `GET /vocabulary/:id` - Get details about a specific word
// - `GET /vocabulary/random` - Get a random word
// - `POST /vocabulary` - Add a new word to the system (if necessary)

// #### User-Specific Endpoints
// - `GET /users/:userId/vocabulary` - Get a user's saved words
// - `POST /users/:userId/vocabulary` - Add a word to a user's saved list
// - `DELETE /users/:userId/vocabulary/:wordId` - Remove a word from a user's list


