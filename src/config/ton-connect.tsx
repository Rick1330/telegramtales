
import { TonConnectUIProvider } from '@tonconnect/ui-react';

// Using the official testnet manifest URL for development
export const manifestUrl = 'https://ton-connect.github.io/demo-dapp-with-react/manifest.json';

export const TonConnectProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TonConnectUIProvider
      manifestUrl={manifestUrl}
      getConnectParameters={() => ({
        // Set the timeout for connection attempts
        timeout: 30_000,
      })}
      uiPreferences={{
        // Use system theme by default
        theme: 'system'
      }}
    >
      {children}
    </TonConnectUIProvider>
  );
};
