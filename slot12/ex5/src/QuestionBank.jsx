import React, { useReducer, useEffect } from "react";
import { Button, Container, Card, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  feedback: "",
  score: 0,
  showScore: false,
  timeLeft: 10,
  highScore: localStorage.getItem("highScore")
    ? parseInt(localStorage.getItem("highScore"))
    : 0,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };

    case "SET_FEEDBACK":
      return { ...state, feedback: action.payload };

    case "NEXT_QUESTION": {
      const isCorrect =
        state.selectedOption === state.questions[state.currentQuestion].answer;
      const newScore = isCorrect ? state.score + 1 : state.score;
      const newHighScore =
        newScore > state.highScore ? newScore : state.highScore;

      if (newScore > state.highScore) {
        localStorage.setItem("highScore", newScore);
      }

      return {
        ...state,
        score: newScore,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        feedback: "",
        timeLeft: 10,
        highScore: newHighScore,
        showScore: state.currentQuestion + 1 === state.questions.length,
      };
    }

    case "SET_TIME":
      return { ...state, timeLeft: action.payload };

    case "TIME_OUT": {
      const correctAnswer = state.questions[state.currentQuestion].answer;
      return {
        ...state,
        feedback: `❌ Time's up! The correct answer is: ${correctAnswer}`,
      };
    }

    case "RESTART_QUIZ":
      return { ...initialState, highScore: state.highScore };

    default:
      return state;
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const {
    questions,
    currentQuestion,
    selectedOption,
    feedback,
    score,
    showScore,
    timeLeft,
    highScore,
  } = state;

  // Đồng hồ đếm ngược
  useEffect(() => {
    if (showScore) return;

    if (timeLeft <= 0) {
      dispatch({ type: "TIME_OUT" });
      return;
    }

    const timer = setTimeout(() => {
      dispatch({ type: "SET_TIME", payload: timeLeft - 1 });
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, showScore]);

  // Khi chọn đáp án
  const handleOptionSelect = (option) => {
    if (feedback) return; // Không cho chọn lại khi đã có phản hồi
    dispatch({ type: "SELECT_OPTION", payload: option });

    const correctAnswer = questions[currentQuestion].answer;
    if (option === correctAnswer) {
      dispatch({ type: "SET_FEEDBACK", payload: "✅ Correct! 🎉" });
    } else {
      dispatch({
        type: "SET_FEEDBACK",
        payload: `❌ Incorrect! The correct answer is: ${correctAnswer}`,
      });
    }
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  const progressText = `${currentQuestion + 1}/${questions.length}`;
  const progressValue = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow-sm">
        {showScore ? (
          <div className="text-center">
            <h2>
              Your Score: {score} / {questions.length}
            </h2>
            <h4 className="text-success mt-2">
              🏆 High Score: {highScore}
            </h4>
            <Button variant="primary" onClick={handleRestartQuiz}>
              Restart Quiz
            </Button>
          </div>
        ) : (
          <>
            <h5 className="text-muted">
              Progress: {progressText}
            </h5>
            <ProgressBar
              now={progressValue}
              label={`${Math.round(progressValue)}%`}
              className="mb-3"
            />

            <h4>
              Question {questions[currentQuestion].id}:<br />
              {questions[currentQuestion].question}
            </h4>

            <div className="mt-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    selectedOption === option ? "success" : "outline-secondary"
                  }
                  className="m-2"
                  onClick={() => handleOptionSelect(option)}
                  disabled={!!feedback} // Không cho chọn sau khi đã trả lời
                >
                  {option}
                </Button>
              ))}
            </div>

            {feedback && (
              <div
                className={`mt-3 fw-bold ${
                  feedback.includes("Correct") ? "text-success" : "text-danger"
                }`}
              >
                {feedback.includes("Correct") ? (
                  <FaCheckCircle className="me-2" />
                ) : (
                  <FaTimesCircle className="me-2" />
                )}
                {feedback}
              </div>
            )}

            <div className="mt-3">
              <h5
                style={{
                  color: timeLeft <= 5 ? "red" : "black",
                  fontWeight: "bold",
                }}
              >
                ⏰ Time left: {timeLeft}s
              </h5>
            </div>

            <Button
              variant="primary"
              className="mt-3"
              disabled={!feedback}
              onClick={handleNextQuestion}
            >
              {currentQuestion === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </Button>
          </>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBank;
