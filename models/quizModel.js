exports.quizzes = [
  {
    id: 'quiz123',
    name: 'Math Fundamentals',
    description: 'Test your basic math skills',
    timeLimit: 30, // seconds per question
    questions: [
      {
        id: 1,
        text: 'What is 2 + 2?',
        answers: [
          { id: 'a', text: '3' },
          { id: 'b', text: '4' },
          { id: 'c', text: '5' },
          { id: 'd', text: '6' },
        ],
        correctAnswer: 'b',
        points: 10
      },
      {
        id: 2,
        text: 'What is 15 × 4?',
        answers: [
          { id: 'a', text: '45' },
          { id: 'b', text: '50' },
          { id: 'c', text: '60' },
          { id: 'd', text: '75' },
        ],
        correctAnswer: 'c',
        points: 15
      },
      {
        id: 3,
        text: 'Solve: 100 ÷ 5',
        answers: [
          { id: 'a', text: '15' },
          { id: 'b', text: '20' },
          { id: 'c', text: '25' },
          { id: 'd', text: '30' },
        ],
        correctAnswer: 'b',
        points: 10
      }
    ],

    participants: [
      { id: 'user1', name: 'Alice', score: 25, currentQuestionIndex: 1 },
      { id: 'user2', name: 'Bob', score: 20, currentQuestionIndex: 1 },
      { id: 'user3', name: 'Charlie', score: 35, currentQuestionIndex: 1 }
    ],
    status: 'active'
  },
  {
    id: 'quiz456',
    name: 'Science Trivia',
    description: 'Test your knowledge of basic science',
    timeLimit: 45,
    questions: [
      {
        id: 1,
        text: 'What is the chemical symbol for gold?',
        answers: [
          { id: 'a', text: 'Ag' },
          { id: 'b', text: 'Fe' },
          { id: 'c', text: 'Au' },
          { id: 'd', text: 'Cu' },
        ],
        correctAnswer: 'c',
        points: 10
      },
      {
        id: 2,
        text: 'Which planet is known as the Red Planet?',
        answers: [
          { id: 'a', text: 'Venus' },
          { id: 'b', text: 'Mars' },
          { id: 'c', text: 'Jupiter' },
          { id: 'd', text: 'Saturn' },
        ],
        correctAnswer: 'b',
        points: 10
      }
    ],
    currentQuestionIndex: 1,
    participants: [
      { id: 'user4', name: 'David', score: 10 },
      { id: 'user5', name: 'Emma', score: 15 }
    ],
    status: 'active'
  },
  {
    id: 'quiz789',
    name: 'Programming Basics',
    description: 'Test your programming knowledge',
    timeLimit: 60,
    questions: [
      {
        id: 1,
        text: 'What does HTML stand for?',
        answers: [
          { id: 'a', text: 'Hyper Text Markup Language' },
          { id: 'b', text: 'High Technical Modern Language' },
          { id: 'c', text: 'Hyper Transfer Markup Language' },
          { id: 'd', text: 'Home Tool Markup Language' },
        ],
        correctAnswer: 'a',
        points: 15
      },
      {
        id: 2,
        text: 'Which symbol is used for single-line comments in JavaScript?',
        answers: [
          { id: 'a', text: '#' },
          { id: 'b', text: '//' },
          { id: 'c', text: '/* */' },
          { id: 'd', text: '--' },
        ],
        correctAnswer: 'b',
        points: 15
      },
      {
        id: 3,
        text: 'What is the correct way to declare a JavaScript variable?',
        answers: [
          { id: 'a', text: 'variable name;' },
          { id: 'b', text: 'var name;' },
          { id: 'c', text: 'v name;' },
          { id: 'd', text: 'variable = name;' },
        ],
        correctAnswer: 'b',
        points: 20
      }
    ],
    currentQuestionIndex: 0,
    participants: [],
    status: 'pending'
  },
  {
    id: 'quiz101',
    name: 'Geography Challenge',
    description: 'Test your knowledge of world geography',
    timeLimit: 40,
    questions: [
      {
        id: 1,
        text: 'What is the capital of Japan?',
        answers: [
          { id: 'a', text: 'Seoul' },
          { id: 'b', text: 'Beijing' },
          { id: 'c', text: 'Tokyo' },
          { id: 'd', text: 'Bangkok' },
        ],
        correctAnswer: 'c',
        points: 10
      },
      {
        id: 2,
        text: 'Which is the largest continent by area?',
        answers: [
          { id: 'a', text: 'North America' },
          { id: 'b', text: 'Africa' },
          { id: 'c', text: 'Asia' },
          { id: 'd', text: 'Europe' },
        ],
        correctAnswer: 'c',
        points: 15
      }
    ],
    currentQuestionIndex: 0,
    participants: [
      { id: 'user6', name: 'Frank', score: 0 },
      { id: 'user7', name: 'Grace', score: 0 },
      { id: 'user8', name: 'Henry', score: 0 }
    ],
    status: 'pending'
  }
];
