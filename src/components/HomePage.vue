<template>
  <div class="home-container">
    <div class="hero-section">
      <h1 class="title">Teka-Teki Challenge</h1>
      <p class="subtitle">Uji kecerdasan dan kecepatan berpikir Anda!</p>
      
      <div class="features">
        <div v-for="(feature, index) in features" :key="index" class="feature-card">
          <span class="feature-icon">{{ feature.icon }}</span>
          <p>{{ feature.text }}</p>
        </div>
      </div>
      
      <button @click="startGame" class="start-button">
        Mulai Bermain
        <span class="button-icon">🚀</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      features: [
        { icon: '🔀', text: 'Pertanyaan acak setiap kali main' },
        { icon: '🕒', text: 'Timer 60 detik per sesi' },
        { icon: '🧠', text: 'Skor langsung dihitung' },
        { icon: '🎉', text: 'Halaman hasil akhir' },
        { icon: '🔄', text: 'Tombol untuk mulai ulang' },
        { icon: '🚀', text: 'Navigasi antar halaman (SPA)' }
      ]
    }
  },
  methods: {
    startGame() {
      this.$router.push('/play')
    }
  }
}
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
}

.hero-section {
  max-width: 800px;
  background: rgba(255, 255, 255, 0.9);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.8s ease-out;
}

.title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #1a2a6c;
  background: linear-gradient(to right, #1a2a6c, #b21f1f);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #555;
}

.features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
}

.feature-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.5rem;
}

.start-button {
  background: linear-gradient(to right, #1a2a6c, #b21f1f);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.start-button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.button-icon {
  font-size: 1.5rem;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .features {
    grid-template-columns: 1fr;
  }
  
  .title {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
}
</style>