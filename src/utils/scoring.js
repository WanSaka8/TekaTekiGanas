export const calculateScore = (isCorrect, questionCount) => {
  if (!isCorrect) return 0
  
  // Base points + bonus for faster answers (earlier questions)
  const basePoints = 10
  const speedBonus = Math.max(0, 15 - questionCount)
  
  return basePoints + speedBonus
}