import { useEffect, useRef } from 'react';
import { GAME_SETTINGS } from './constants';
import { adjustColor } from './utils';

interface Tube {
  colors: string[];
  selected: boolean;
  animating?: boolean;
}

interface GameCanvasProps {
  tubes: Tube[];
  onTubeClick: (index: number) => void;
}

const GameCanvas = ({ tubes, onTubeClick }: GameCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawTubes = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    tubes.forEach((tube, index) => {
      const x = (index % 4) * 100 + 50;
      const y = Math.floor(index / 4) * 200 + 100;

      // Draw tube with enhanced glass effect
      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
      ctx.shadowBlur = 12;
      ctx.shadowOffsetY = 4;

      // Draw tube body with more pronounced rounded corners
      ctx.beginPath();
      const cornerRadius = 8;

      // Enhanced tube shape with curved bottom
      ctx.moveTo(x - GAME_SETTINGS.TUBE_WIDTH/2 + cornerRadius, y);
      ctx.lineTo(x + GAME_SETTINGS.TUBE_WIDTH/2 - cornerRadius, y);
      ctx.quadraticCurveTo(x + GAME_SETTINGS.TUBE_WIDTH/2, y, x + GAME_SETTINGS.TUBE_WIDTH/2, y + cornerRadius);
      ctx.lineTo(x + GAME_SETTINGS.TUBE_WIDTH/2, y + GAME_SETTINGS.TUBE_HEIGHT - cornerRadius);
      ctx.quadraticCurveTo(x + GAME_SETTINGS.TUBE_WIDTH/2, y + GAME_SETTINGS.TUBE_HEIGHT, x, y + GAME_SETTINGS.TUBE_HEIGHT + 5);
      ctx.quadraticCurveTo(x - GAME_SETTINGS.TUBE_WIDTH/2, y + GAME_SETTINGS.TUBE_HEIGHT, x - GAME_SETTINGS.TUBE_WIDTH/2, y + GAME_SETTINGS.TUBE_HEIGHT - cornerRadius);
      ctx.lineTo(x - GAME_SETTINGS.TUBE_WIDTH/2, y + cornerRadius);
      ctx.quadraticCurveTo(x - GAME_SETTINGS.TUBE_WIDTH/2, y, x - GAME_SETTINGS.TUBE_WIDTH/2 + cornerRadius, y);

      // Enhanced glass effect gradient
      const glassGradient = ctx.createLinearGradient(x - GAME_SETTINGS.TUBE_WIDTH/2, y, x + GAME_SETTINGS.TUBE_WIDTH/2, y);
      glassGradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      glassGradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.2)');
      glassGradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.2)');
      glassGradient.addColorStop(1, 'rgba(255, 255, 255, 0.9)');

      ctx.strokeStyle = tube.selected ? '#0088CC' : 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = tube.selected ? 3 : 2;
      ctx.fillStyle = glassGradient;
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Draw liquid segments with enhanced animation
      tube.colors.forEach((color, colorIndex) => {
        const segmentHeight = GAME_SETTINGS.TUBE_HEIGHT / GAME_SETTINGS.SEGMENTS_PER_TUBE;
        let segmentY = y + GAME_SETTINGS.TUBE_HEIGHT - (colorIndex + 1) * segmentHeight;

        if (tube.animating) {
          segmentY += Math.sin(Date.now() / 200 + colorIndex) * 3;
        }

        const liquidGradient = ctx.createLinearGradient(x - GAME_SETTINGS.TUBE_WIDTH/2, segmentY, x + GAME_SETTINGS.TUBE_WIDTH/2, segmentY + segmentHeight);
        liquidGradient.addColorStop(0, color);
        liquidGradient.addColorStop(1, adjustColor(color, -20));

        ctx.fillStyle = liquidGradient;
        ctx.beginPath();
        ctx.moveTo(x - GAME_SETTINGS.TUBE_WIDTH/2 + 2, segmentY);
        ctx.lineTo(x - GAME_SETTINGS.TUBE_WIDTH/2 + 2, segmentY + segmentHeight);
        ctx.lineTo(x + GAME_SETTINGS.TUBE_WIDTH/2 - 2, segmentY + segmentHeight);
        ctx.lineTo(x + GAME_SETTINGS.TUBE_WIDTH/2 - 2, segmentY);
        ctx.fill();
      });
    });
  };

  useEffect(() => {
    const animate = () => {
      drawTubes();
      requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(requestAnimationFrame(animate));
  }, [tubes]);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={500}
      className="transition-transform hover:scale-[1.02]"
      onClick={(e) => {
        const rect = canvasRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const tubeIndex = Math.floor(x / 100) + Math.floor(y / 200) * 4;
        if (tubeIndex < tubes.length) {
          onTubeClick(tubeIndex);
        }
      }}
    />
  );
};

export default GameCanvas;