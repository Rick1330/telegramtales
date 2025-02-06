import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';

type ThemeConfig = {
  route: string;
  color?: `#${string}`;
  colorKey?: 'bg_color' | 'secondary_bg_color';
};

const themeConfigs: ThemeConfig[] = [
  {
    route: '/profile',
    color: '#2563EB', // Royal blue for consistency
  },
  {
    route: '/games',
    color: '#2563EB', // Royal blue for games
  },
  {
    route: '/avatar',
    color: '#2563EB', // Royal blue for avatar
  },
  {
    route: '/top',
    color: '#2563EB', // Royal blue for leaderboard
  },
  {
    route: '/',
    color: '#2563EB', // Royal blue for home
  }
];

export const useTelegramTheme = (currentRoute: string) => {
  useEffect(() => {
    if (!WebApp.ready) {
      console.warn('Telegram WebApp is not initialized');
      return;
    }

    const config = themeConfigs.find(cfg => currentRoute.startsWith(cfg.route)) || themeConfigs[0];

    if (config.colorKey) {
      WebApp.setHeaderColor(config.colorKey);
    } else if (config.color) {
      WebApp.setHeaderColor(config.color);
    }
  }, [currentRoute]);
};

export default useTelegramTheme;