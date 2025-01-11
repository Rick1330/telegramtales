import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';

type ThemeConfig = {
  route: string;
  color?: string;
  colorKey?: 'bg_color' | 'secondary_bg_color' | 'header_bg_color';
};

const themeConfigs: ThemeConfig[] = [
  {
    route: '/profile',
    color: '#0EA5E9', // Ocean Blue for profile page
  },
  {
    route: '/games',
    color: '#8B5CF6', // Vivid Purple for games page
  },
  {
    route: '/avatar',
    color: '#D946EF', // Magenta Pink for avatar page
  },
  {
    route: '/',
    colorKey: 'bg_color', // Default theme matching for home page
  },
  {
    route: '/top',
    color: '#1EAEDB', // Bright Blue for leaderboard
  }
];

export const useTelegramTheme = (currentRoute: string) => {
  useEffect(() => {
    if (!WebApp.isInitialized) {
      console.warn('Telegram WebApp is not initialized');
      return;
    }

    const config = themeConfigs.find(cfg => currentRoute.startsWith(cfg.route)) || themeConfigs[0];

    if (config.colorKey) {
      WebApp.setHeaderColor(config.colorKey);
    } else if (config.color) {
      WebApp.setHeaderColor('custom', { color: config.color });
    }

    // Ensure MainButton is hidden by default
    if (WebApp.MainButton.isVisible) {
      WebApp.MainButton.hide();
    }
  }, [currentRoute]);
};

export default useTelegramTheme;