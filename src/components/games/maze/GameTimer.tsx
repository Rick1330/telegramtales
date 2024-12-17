interface GameTimerProps {
  timeLeft: number;
}

const GameTimer = ({ timeLeft }: GameTimerProps) => {
  return (
    <div className="bg-[#4CAF50] text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg">
      {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
    </div>
  );
};

export default GameTimer;