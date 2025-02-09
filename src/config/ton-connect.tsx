
import { TonConnectUIProvider } from '@tonconnect/ui-react';

// Use a more reliable manifest URL that's accessible
const manifestUrl = 'https://ton.org/app/manifest.json';

export const TonConnectProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TonConnectUIProvider
      manifestUrl={manifestUrl}
      actionsConfiguration={{
        // Use a more reliable twaReturnUrl configuration
        twaReturnUrl: window.location.origin,
        // Add reconnectTimeout to prevent abrupt disconnections
        reconnectTimeout: 2000,
      }}
      uiPreferences={{
        theme: 'SYSTEM',
        // Add error handling configuration
        showAllWallets: true,
        retryConfiguration: {
          maxRetryCount: 3,
          delayMs: 500,
        }
      }}
    >
      {children}
    </TonConnectUIProvider>
  );
};
