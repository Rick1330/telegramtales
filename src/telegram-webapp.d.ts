declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string;
        initDataUnsafe: Record<string, any>;
        close: () => void;
        ready: () => void;
        setHeaderColor: (colorKey: string, color: string) => void;
        expand: () => void;
        themeParams: Record<string, string>;
      };
    };
  }
}

export {};