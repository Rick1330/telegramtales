
import { TonConnectUIProvider } from '@tonconnect/ui-react';

// Using the official testnet manifest URL for development
export const manifestUrl = 'https://ton-connect.github.io/demo-dapp-with-react/manifest.json';

export const TonConnectProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TonConnectUIProvider
      manifestUrl={manifestUrl}
      uiPreferences={{
        theme: 'SYSTEM'
      }}
    >
      {children}
    </TonConnectUIProvider>
  );
};
