<template>
  <div class="game-container">
    <div class="game-header">
      <Timer :timeLimit="60" @timeUp="handleTimeUp" />
      <div class="score">Skor: {{ score }}</div>
    </div>
    
    <div class="question-container">
      <h2 class="question">{{ currentQuestion.text }}</h2>
      
      <div v-if="currentQuestion.type === 'multiple-choice'" class="options">
        <button 
          v-for="(option, index) in currentQuestion.options" 
          :key="index" 
          @click="checkAnswer(option)"
          class="option-button"
          :class="{ 'correct': answered && option === currentQuestion.answer, 
                    'incorrect': answered && option !== currentQuestion.answer && selectedAnswer === option }"
        >
          {{ option }}
        </button>
      </div>
      
      <div v-else-if="currentQuestion.type === 'riddle'" class="answer-input">
        <input 
          v-model="userAnswer" 
          @keyup.enter="checkAnswer(userAnswer)"
          placeholder="Ketik jawaban Anda..."
          class="answer-field"
        >
        <button @click="checkAnswer(userAnswer)" class="submit-button">Submit</button>
      </div>
      
      <div v-if="answered" class="feedback">
        <p v-if="isCorrect" class="correct-feedback">🎉 Benar! +{{ pointsEarned }} poin</p>
        <p v-else class="incorrect-feedback">❌ Salah! Jawaban benar: {{ currentQuestion.answer }}</p>
        <button @click="nextQuestion" class="next-button">Pertanyaan Berikutnya</button>
      </div>
    </div>
  </div>
</template>

<script>
import Timer from './Timer.vue'
import { questions } from '../utils/questions'
import { calculateScore } from '../utils/scoring'

export default {
  name: 'GameBoard',
  components: { Timer },
  data() {
    return {
      questions: questions,
      currentQuestion: {},
      score: 0,
      answered: false,
      isCorrect: false,
      selectedAnswer: '',
      userAnswer: '',
      pointsEarned: 0,
      questionCount: 0
    }
  },
  created() {
    this.getRandomQuestion()
  },
  methods: {
    getRandomQuestion() {
      const randomIndex = Math.floor(Math.random() * this.questions.length)
      this.currentQuestion = JSON.parse(JSON.stringify(this.questions[randomIndex]))
      this.answered = false
      this.selectedAnswer = ''
      this.userAnswer = ''
      this.questionCount++
    },
    checkAnswer(answer) {
      if (this.answered) return
      
      this.answered = true
      this.selectedAnswer = answer
      
      // Case insensitive comparison for riddles
      if (this.currentQuestion.type === 'riddle') {
        this.isCorrect = answer.toLowerCase() === this.currentQuestion.answer.toLowerCase()
      } else {
        this.isCorrect = answer === this.currentQuestion.answer
      }
      
      this.pointsEarned = calculateScore(this.isCorrect, this.questionCount)
      if (this.isCorrect) {
        this.score += this.pointsEarned
      }
    },
    nextQuestion() {
      this.getRandomQuestion()
    },
    handleTimeUp() {
      this.$router.push({ 
        path: '/results',
        query: { score: this.score }
      })
    }
  }
}
</script>

<style scoped>
.game-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  min-height: 70vh;
  display: flex;
  flex-direction: column;
}

.game-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #eee;
}

.score {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a2a6c;
}

.question-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.question {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #333;
  line-height: 1.4;
}

.options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.option-button {
  padding: 1rem;
  border: 2px solid #ddd;
  border-radius: 10px;
  background: white;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.option-button:hover {
  border-color: #1a2a6c;
  transform: translateY(-2px);
}

.option-button.correct {
  background: #4CAF50;
  color: white;
  border-color: #4CAF50;
}

.option-button.incorrect {
  background: #F44336;
  color: white;
  border-color: #F44336;
}

.answer-input {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.answer-field {
  flex-grow: 1;
  padding: 1rem;
  border: 2px solid #ddd;
  border-radius: 10px;
  font-size: 1.1rem;
}

.answer-field:focus {
  outline: none;
  border-color: #1a2a6c;
}

.submit-button {
  padding: 0 1.5rem;
  background: #1a2a6c;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-button:hover {
  background: #b21f1f;
}

.feedback {
  margin-top: auto;
}

.correct-feedback {
  color: #4CAF50;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.incorrect-feedback {
  color: #F44336;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.next-button {
  padding: 0.8rem 2rem;
  background: #1a2a6c;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.next-button:hover {
  background: #b21f1f;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .options {
    grid-template-columns: 1fr;
  }
  
  .question {
    font-size: 1.5rem;
  }
  
  .answer-input {
    flex-direction: column;
  }
  
  .submit-button {
    padding: 1rem;
  }
}
</style>