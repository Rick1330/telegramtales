import { formatTime } from './utils';

interface TimerProps {
  timeLeft: number;
  moves: number;
}

const Timer = ({ timeLeft, moves }: TimerProps) => {
  return (
    <div className="fixed bottom-20 left-0 right-0 bg-gradient-to-t from-background to-transparent p-4">
      <div className="max-w-xs mx-auto flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="text-lg font-semibold text-primary animate-pulse">
          Moves: {moves}
        </div>
        <div className="text-lg font-bold text-primary">
          {formatTime(timeLeft)}
        </div>
      </div>
    </div>
  );
};

export default Timer;