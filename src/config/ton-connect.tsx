
import { TonConnectUIProvider } from '@tonconnect/ui-react';

// Using a more reliable manifest URL configuration
export const manifestUrl = 'https://raw.githubusercontent.com/ton-community/tutorials/main/03-wallet/test/public/tonconnect-manifest.json';

export const TonConnectProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TonConnectUIProvider
      manifestUrl={manifestUrl}
      actionsConfiguration={{
        twaReturnUrl: window.location.origin,
      }}
      uiPreferences={{
        theme: 'SYSTEM'
      }}
    >
      {children}
    </TonConnectUIProvider>
  );
};
