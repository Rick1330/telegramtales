
import { TonConnectUIProvider } from '@tonconnect/ui-react';

// Updated manifest URL with a more reliable configuration
export const manifestUrl = 'https://raw.githubusercontent.com/ton-community/tutorials/main/03-wallet/test/public/tonconnect-manifest.json';

export const TonConnectProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TonConnectUIProvider
      manifestUrl={manifestUrl}
      actionsConfiguration={{
        // Ensure proper protocol and format for twaReturnUrl
        twaReturnUrl: `https://${window.location.host}`,
      }}
      uiPreferences={{
        theme: 'SYSTEM',
        // Adding additional connection options for better stability
        allowWalletConnectConnection: true
      }}
      connectorConfiguration={{
        // Add connection configuration
        maxTimeout: 60000, // Increase timeout to 60 seconds
        retryDelay: 1500 // Add delay between retries
      }}
    >
      {children}
    </TonConnectUIProvider>
  );
};
