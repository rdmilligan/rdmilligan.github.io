function getChatAnswerId(question, answers) {
  const questionWords = question.toLowerCase().replaceAll(".", "").replaceAll(",", "").split(" ")

  let topAnswerId
  let topScore = 0
  answers.forEach((answer) => {
    let score = 0
    answer.keywords.forEach((keyword) => {
      questionWords.forEach((questionWord) => {
        if (keyword === questionWord) {
          score++
        }
      })
    })

    if (score >= topScore) {
      topAnswerId = answer.id
      topScore = score
    }
  })

  if (topScore === 0) {
    topAnswerId = Math.floor(Math.random() * (answers.length - 1 + 1)) + 1
  }

  return topAnswerId
}
