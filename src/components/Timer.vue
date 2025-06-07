<template>
  <div class="timer-container">
    <div class="timer-circle">
      <svg width="60" height="60" viewBox="0 0 44 44">
        <circle
          cx="22"
          cy="22"
          r="20"
          fill="none"
          stroke="#e0e0e0"
          stroke-width="3"
        ></circle>
        <circle
          cx="22"
          cy="22"
          r="20"
          fill="none"
          :stroke="timerColor"
          stroke-width="3"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="dashOffset"
          stroke-linecap="round"
          transform="rotate(-90 22 22)"
        ></circle>
      </svg>
      <span class="timer-text">{{ formattedTime }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  props: {
    timeLimit: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      timeLeft: this.timeLimit,
      timerInterval: null,
      circumference: 2 * Math.PI * 20
    }
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.timeLeft / 60)
      const seconds = this.timeLeft % 60
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    },
    dashOffset() {
      const progress = this.timeLeft / this.timeLimit
      return this.circumference * (1 - progress)
    },
    timerColor() {
      if (this.timeLeft > this.timeLimit * 0.6) return '#4CAF50'
      if (this.timeLeft > this.timeLimit * 0.3) return '#FFC107'
      return '#F44336'
    }
  },
  mounted() {
    this.startTimer()
  },
  beforeUnmount() {
    clearInterval(this.timerInterval)
  },
  methods: {
    startTimer() {
      this.timerInterval = setInterval(() => {
        this.timeLeft--
        
        if (this.timeLeft <= 0) {
          clearInterval(this.timerInterval)
          this.$emit('timeUp')
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>
.timer-container {
  display: flex;
  align-items: center;
}

.timer-circle {
  position: relative;
  width: 60px;
  height: 60px;
}

.timer-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}
</style>