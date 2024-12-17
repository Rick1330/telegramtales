import { useEffect, useRef } from 'react';

interface MazeCanvasProps {
  gameStarted: boolean;
  onWin: () => void;
  ballRef: React.MutableRefObject<{ x: number; y: number }>;
}

const MazeCanvas = ({ gameStarted, onWin, ballRef }: MazeCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawMaze = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#D3E4FD');
      gradient.addColorStop(1, '#90C5FF');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw maze walls
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 12;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      // Define more complex maze paths
      ctx.beginPath();
      
      // Outer border
      ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
      
      // Horizontal lines (more complex pattern)
      const horizontalPaths = [
        [20, 80, 150, 80],
        [200, 80, 330, 80],
        [20, 140, 100, 140],
        [150, 140, 250, 140],
        [20, 200, 180, 200],
        [230, 200, 330, 200],
        [60, 260, 280, 260],
        [20, 320, 150, 320],
        [200, 320, 330, 320],
      ];

      // Vertical lines (more complex pattern)
      const verticalPaths = [
        [80, 20, 80, 120],
        [150, 80, 150, 180],
        [220, 20, 220, 80],
        [280, 80, 280, 180],
        [80, 200, 80, 300],
        [150, 220, 150, 340],
        [220, 200, 220, 280],
        [280, 280, 280, 340],
      ];

      // Draw paths
      [...horizontalPaths, ...verticalPaths].forEach(([x1, y1, x2, y2]) => {
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
      });
      ctx.stroke();

      // Draw ball
      ctx.beginPath();
      ctx.fillStyle = '#FFD700';
      ctx.arc(ballRef.current.x, ballRef.current.y, 8, 0, Math.PI * 2);
      ctx.fill();

      // Draw star (goal)
      const starX = canvas.width - 40;
      const starY = canvas.height - 40;
      drawStar(ctx, starX, starY, 5, 12, 6);

      // Check if ball reached the star
      const distance = Math.sqrt(
        Math.pow(ballRef.current.x - starX, 2) + 
        Math.pow(ballRef.current.y - starY, 2)
      );
      
      if (distance < 20) {
        onWin();
      }
    };

    const drawStar = (ctx: CanvasRenderingContext2D, x: number, y: number, spikes: number, outerRadius: number, innerRadius: number) => {
      let rot = Math.PI / 2 * 3;
      let step = Math.PI / spikes;

      ctx.beginPath();
      ctx.fillStyle = '#FFD700';
      ctx.moveTo(x, y - outerRadius);

      for (let i = 0; i < spikes; i++) {
        ctx.lineTo(x + Math.cos(rot) * outerRadius, y + Math.sin(rot) * outerRadius);
        rot += step;
        ctx.lineTo(x + Math.cos(rot) * innerRadius, y + Math.sin(rot) * innerRadius);
        rot += step;
      }
      
      ctx.lineTo(x, y - outerRadius);
      ctx.closePath();
      ctx.fill();
    };

    // Handle device orientation
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (!gameStarted) return;

      const beta = event.beta; // X-axis rotation
      const gamma = event.gamma; // Y-axis rotation

      if (beta === null || gamma === null) return;

      // Update ball position based on device tilt
      ballRef.current.x += gamma * 0.5;
      ballRef.current.y += beta * 0.5;

      // Keep ball within canvas bounds
      ballRef.current.x = Math.max(20, Math.min(canvas.width - 20, ballRef.current.x));
      ballRef.current.y = Math.max(20, Math.min(canvas.height - 20, ballRef.current.y));

      drawMaze();
    };

    // Handle keyboard controls
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!gameStarted) return;

      const speed = 5;
      switch (event.key) {
        case 'ArrowUp':
          ballRef.current.y = Math.max(20, ballRef.current.y - speed);
          break;
        case 'ArrowDown':
          ballRef.current.y = Math.min(canvas.height - 20, ballRef.current.y + speed);
          break;
        case 'ArrowLeft':
          ballRef.current.x = Math.max(20, ballRef.current.x - speed);
          break;
        case 'ArrowRight':
          ballRef.current.x = Math.min(canvas.width - 20, ballRef.current.x + speed);
          break;
      }
      drawMaze();
    };

    if (gameStarted) {
      window.addEventListener('deviceorientation', handleOrientation);
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('deviceorientation', handleOrientation);
        window.removeEventListener('keydown', handleKeyDown);
      };
    }

    drawMaze();
  }, [gameStarted, onWin, ballRef]);

  return (
    <canvas
      ref={canvasRef}
      width={350}
      height={350}
      className="rounded-lg shadow-lg mb-6"
    />
  );
};

export default MazeCanvas;