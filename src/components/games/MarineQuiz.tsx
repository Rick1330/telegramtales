import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Which of these marine animals is not a mammal?",
    options: ["Dolphin", "Whale", "Shark", "Seal"],
    correctAnswer: 2,
    explanation: "Sharks are fish, not mammals. They have gills and lay eggs."
  },
  {
    id: 2,
    question: "What is the primary food source for blue whales?",
    options: ["Small fish", "Krill", "Squid", "Plankton"],
    correctAnswer: 1,
    explanation: "Blue whales mainly feed on krill, tiny shrimp-like creatures."
  },
  {
    id: 3,
    question: "Which ocean contains the Great Barrier Reef?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    correctAnswer: 0,
    explanation: "The Great Barrier Reef is located in the Pacific Ocean, off the coast of Australia."
  }
];

const MarineQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showExplanation, setShowExplanation] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!gameOver && !showExplanation && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleTimeout();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft, showExplanation, gameOver]);

  const handleTimeout = () => {
    toast.error("Time's up!");
    setShowExplanation(true);
  };

  const handleAnswer = (answerIndex: number) => {
    const correct = answerIndex === questions[currentQuestion].correctAnswer;
    
    if (correct) {
      setScore(score + 1);
      toast.success("Correct answer!");
    } else {
      toast.error("Wrong answer!");
    }

    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    setTimeLeft(30);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameOver(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(30);
    setShowExplanation(false);
    setGameOver(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
      <div className="bg-gradient-to-b from-blue-600 to-cyan-500 text-white p-6 rounded-b-[2rem] flex items-center gap-4 shadow-lg">
        <Link to="/games">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-2xl font-bold">Marine Biology Quiz</h1>
      </div>

      <div className="p-6 max-w-2xl mx-auto">
        {!gameOver ? (
          <Card className="p-6">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-500">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-medium text-primary">
                  Score: {score}
                </span>
              </div>
              
              <Progress value={(timeLeft / 30) * 100} className="mb-4" />
              
              <h2 className="text-xl font-semibold mb-4">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    className="w-full justify-start text-left"
                    variant="outline"
                    onClick={() => handleAnswer(index)}
                    disabled={showExplanation}
                  >
                    {option}
                  </Button>
                ))}
              </div>

              {showExplanation && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    {questions[currentQuestion].explanation}
                  </p>
                  <Button
                    className="w-full mt-4"
                    onClick={nextQuestion}
                  >
                    Next Question
                  </Button>
                </div>
              )}
            </div>
          </Card>
        ) : (
          <Card className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
            <p className="text-xl mb-6">
              Your score: {score} out of {questions.length}
            </p>
            <Button onClick={resetQuiz} className="w-full">
              Play Again
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MarineQuiz;
