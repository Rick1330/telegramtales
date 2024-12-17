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
      
      // Define maze paths
      ctx.beginPath();
      // Outer border
      ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
      
      // Horizontal lines
      const horizontalPaths = [
        [20, 100, 150, 100],
        [200, 100, 330, 100],
        [20, 180, 100, 180],
        [150, 180, 330, 180],
        [20, 260, 250, 260],
        [300, 260, 330, 260],
        [20, 340, 180, 340],
        [230, 340, 330, 340],
      ];

      // Vertical lines
      const verticalPaths = [
        [100, 20, 100, 80],
        [100, 120, 100, 160],
        [180, 20, 180, 150],
        [250, 180, 250, 240],
        [180, 280, 180, 320],
        [100, 360, 100, 460],
        [250, 360, 250, 460],
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
      const starX = canvas.width / 2;
      const starY = canvas.height / 2;
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

    if (gameStarted) {
      window.addEventListener('deviceorientation', handleOrientation);
      return () => {
        window.removeEventListener('deviceorientation', handleOrientation);
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
