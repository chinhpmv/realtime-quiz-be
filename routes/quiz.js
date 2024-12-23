const express = require("express")
const { roomFunctions } = require("../controllers/quizController")
const router = express.Router()

router.get("/up", (req, res) => {
  res.json({ message: "Quiz services is running" })
})
router.post("/:roomId/join", (req, res) => {
  try {
    const { playerName, userId } = req.body
    const state = roomFunctions.joinRoom(userId, playerName)
    res.json(state)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.get("/:roomId/question", (req, res) => {
  try {
    const questions = roomFunctions.getQuestions()
    res.json(questions)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.get("/:roomId/leaderboard", (req, res) => {
  try {
    const leaderboard = roomFunctions.getLeaderboard()
    res.json(leaderboard)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.post("/:roomId/answer", (req, res) => {
  try {
    const { userId, answerId, quizId } = req.body
    const result = roomFunctions.submitAnswer(userId, quizId, answerId)
    res.json(result)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = router
