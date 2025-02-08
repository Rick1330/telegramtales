
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
        theme: 'SYSTEM'
      }}
      connectionRestoreTimeout={60000}
    >
      {children}
    </TonConnectUIProvider>
  );
};
