import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the largest species of dolphin?",
    options: ["Bottlenose Dolphin", "Orca (Killer Whale)", "Spinner Dolphin", "Common Dolphin"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "How deep can sperm whales dive?",
    options: ["500 meters", "1000 meters", "2000 meters", "3000 meters"],
    correctAnswer: 3
  },
  {
    id: 3,
    question: "Which ocean is the largest?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Southern Ocean"],
    correctAnswer: 2
  }
];

const DailyQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      toast.success("Correct answer!");
    } else {
      toast.error("Wrong answer!");
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
      <div className="gradient-bg p-4 flex items-center gap-4 text-white">
        <Link to="/games">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-bold">Daily Ocean Quiz</h1>
      </div>

      <div className="p-6 max-w-2xl mx-auto">
        {!showResults ? (
          <Card className="p-6 shadow-lg">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-gray-500">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-medium text-primary">
                  Score: {score}
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-4">
                {questions[currentQuestion].question}
              </h2>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    className={`w-full justify-start text-left ${
                      selectedAnswer === index
                        ? index === questions[currentQuestion].correctAnswer
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-red-500 hover:bg-red-600"
                        : ""
                    }`}
                    variant={selectedAnswer === null ? "outline" : "default"}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                  >
                    {option}
                  </Button>
                ))}
              </div>
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

export default DailyQuiz;