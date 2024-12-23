const express = require("express")
const router = express.Router()
const WebSocket = require("ws")
const { quizzes } = require("../models/quizModel")
const { broadcastLeaderboard } = require("../websocket")

// Single quiz room configuration
const QUIZ_ROOM = {
  roomId: "quiz123",
  questions: [
    {
      id: 1,
      text: "What is 2 + 2?",
      answers: [
        { id: "a", text: "3" },
        { id: "b", text: "4" },
        { id: "c", text: "5" },
        { id: "d", text: "6" },
      ],
      correctAnswer: "b",
      points: 10,
    },
    {
      id: 2,
      text: "What is 10 × 5?",
      answers: [
        { id: "a", text: "40" },
        { id: "b", text: "45" },
        { id: "c", text: "50" },
        { id: "d", text: "55" },
      ],
      correctAnswer: "c",
      points: 10,
    },
    {
      id: 3,
      text: "What is 100 ÷ 4?",
      answers: [
        { id: "a", text: "20" },
        { id: "b", text: "25" },
        { id: "c", text: "15" },
        { id: "d", text: "30" },
      ],
      correctAnswer: "b",
      points: 10,
    },
    {
      id: 4,
      text: "What is 2 + 2?",
      answers: [
        { id: "a", text: "3" },
        { id: "b", text: "4" },
        { id: "c", text: "5" },
        { id: "d", text: "6" },
      ],
      correctAnswer: "b",
      points: 10,
    },
    {
      id: 5,
      text: "What is 10 × 5?",
      answers: [
        { id: "a", text: "40" },
        { id: "b", text: "45" },
        { id: "c", text: "50" },
        { id: "d", text: "55" },
      ],
      correctAnswer: "c",
      points: 10,
    },
    {
      id: 6,
      text: "What is 100 ÷ 4?",
      answers: [
        { id: "a", text: "20" },
        { id: "b", text: "25" },
        { id: "c", text: "15" },
        { id: "d", text: "30" },
      ],
      correctAnswer: "b",
      points: 10,
    },
  ],
  players: new Map(),
}

QUIZ_ROOM.players.set("user1", {
  id: "user1",
  name: "Alice",
  score: 0,
  answers: [],
  questionStartTime: Date.now(),
})

QUIZ_ROOM.players.set("user2", {
  id: "user2",
  name: "Bob",
  score: 0,
  answers: [],
  questionStartTime: Date.now(),
})

// Room functions
const roomFunctions = {
  joinRoom(userId, playerName) {
    QUIZ_ROOM.players.set(userId, {
      id: userId,
      name: playerName,
      score: 0,
      answers: [],
      questionStartTime: Date.now(),
    })

    return this.getQuestions()
  },

  getQuestions() {
    const questions = QUIZ_ROOM.questions
    return questions
  },

  submitAnswer(userId, quizId, answerId) {
    const player = QUIZ_ROOM.players.get(userId)
    if (!player) throw new Error("Player not found")

    const currentQuestion = QUIZ_ROOM.questions.find((q) => q.id === quizId)
    if (!currentQuestion) throw new Error("Not a valid question")

    const answerTime = Date.now()
    const timeTaken = (answerTime - player.questionStartTime) / 1000

    console.log(`Player ${player.name} took ${timeTaken}ms to answer`)

    // mock calculation of score
    const isCorrect = true
    const timeBonus = Math.max(1, 10 - timeTaken)
    const score = isCorrect
      ? Math.round(currentQuestion.points * (timeBonus / 10))
      : 0

    player.answers.push({
      answerId,
      isCorrect,
      timeTaken,
      score,
    })

    player.score += score

    // reset question start time
    player.questionStartTime = Date.now()

    // Broadcast updated leaderboard after score change
    broadcastLeaderboard(this.getLeaderboard())

    return {
      isCorrect,
      score,
      timeTaken,
      totalScore: player.score,
    }
  },

  getLeaderboard() {
    return Array.from(QUIZ_ROOM.players.values())
      .map((p) => ({
        id: p.id,
        name: p.name,
        score: p.score,
      }))
      .sort((a, b) => b.score - a.score)
  },
}

exports.roomFunctions = { ...roomFunctions }
