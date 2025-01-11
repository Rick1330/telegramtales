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
    color: '#0EA5E9',
  },
  {
    route: '/games',
    color: '#8B5CF6',
  },
  {
    route: '/avatar',
    color: '#D946EF',
  },
  {
    route: '/',
    color: '#2563EB', // Set a specific blue color for the home route
  },
  {
    route: '/top',
    color: '#1EAEDB',
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