
import { TonConnectUIProvider } from '@tonconnect/ui-react';

// Use a more reliable manifest URL that's accessible
const manifestUrl = 'https://ton.org/app/manifest.json';

export const TonConnectProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TonConnectUIProvider
      manifestUrl={manifestUrl}
      actionsConfiguration={{
        twaReturnUrl: `https://${window.location.host}`,
      }}
      uiPreferences={{
        theme: 'SYSTEM',
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
