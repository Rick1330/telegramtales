
import { TonConnectUIProvider } from '@tonconnect/ui-react';

// Use a more reliable manifest URL that's accessible
const manifestUrl = 'https://ton.org/app/manifest.json';

export const TonConnectProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TonConnectUIProvider
      manifestUrl={manifestUrl}
      actionsConfiguration={{
        // Fix the twaReturnUrl type by ensuring it matches the expected format
        twaReturnUrl: `https://${window.location.host}`,
        // Add reconnectTimeout to prevent abrupt disconnections
        reconnectTimeout: 2000,
      }}
      uiPreferences={{
        theme: 'SYSTEM',
        // Remove the invalid showAllWallets property
        walletsList: {
          includeWallets: 'all'
        },
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
