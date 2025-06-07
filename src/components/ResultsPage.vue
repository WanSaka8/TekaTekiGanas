<template>
  <div class="results-container">
    <div class="results-card">
      <h1 class="results-title">Hasil Permainan</h1>
      
      <div class="score-display">
        <div class="score-circle">
          <span class="score-value">{{ score }}</span>
          <span class="score-label">Poin</span>
        </div>
      </div>
      
      <div class="feedback">
        <h2 v-if="score >= 100" class="feedback-title">Luar Biasa! 🎉</h2>
        <h2 v-else-if="score >= 50" class="feedback-title">Bagus! 👍</h2>
        <h2 v-else class="feedback-title">Terus Berlatih! 💪</h2>
        
        <p class="feedback-text">{{ getFeedbackText() }}</p>
      </div>
      
      <div class="actions">
        <button @click="playAgain" class="action-button play-again">
          Main Lagi
        </button>
        <button @click="goHome" class="action-button go-home">
          Kembali ke Beranda
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultsPage',
  data() {
    return {
      score: 0
    }
  },
  created() {
    this.score = parseInt(this.$route.query.score) || 0
  },
  methods: {
    getFeedbackText() {
      if (this.score >= 100) {
        return "Anda benar-benar ahli dalam teka-teki! Pertahankan prestasi ini!"
      } else if (this.score >= 50) {
        return "Hasil yang bagus! Dengan sedikit latihan, Anda bisa menjadi lebih baik!"
      } else {
        return "Setiap permainan adalah kesempatan untuk belajar. Coba lagi untuk meningkatkan skor Anda!"
      }
    },
    playAgain() {
      this.$router.push('/play')
    },
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.results-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
}

.results-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.8s ease-out;
}

.results-title {
  font-size: 2.5rem;
  color: #1a2a6c;
  margin-bottom: 2rem;
  text-align: center;
}

.score-display {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.score-circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a2a6c, #b21f1f);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.score-circle::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
  animation: pulse 3s infinite;
}

.score-value {
  font-size: 4rem;
  font-weight: bold;
  line-height: 1;
}

.score-label {
  font-size: 1.2rem;
  opacity: 0.9;
}

.feedback {
  text-align: center;
  margin: 2rem 0;
}

.feedback-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.feedback-text {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

.action-button {
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 180px;
}

.play-again {
  background: linear-gradient(to right, #1a2a6c, #3a56b4);
  color: white;
}

.go-home {
  background: linear-gradient(to right, #b21f1f, #d45f5f);
  color: white;
}

.action-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(50px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% { transform: scale(0.8); opacity: 0.8; }
  50% { transform: scale(1.2); opacity: 0.4; }
  100% { transform: scale(0.8); opacity: 0.8; }
}

@media (max-width: 768px) {
  .results-card {
    padding: 2rem 1.5rem;
  }
  
  .actions {
    flex-direction: column;
    gap: 1rem;
  }
  
  .action-button {
    width: 100%;
  }
}
</style>