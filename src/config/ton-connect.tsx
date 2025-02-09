
import { TonConnectUIProvider } from '@tonconnect/ui-react';

// Use a proper manifest URL that points to your application's manifest
const manifestUrl = 'https://raw.githubusercontent.com/ton-community/tutorials/main/03-wallet/test/public/tonconnect-manifest.json';

export const TonConnectProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TonConnectUIProvider
      manifestUrl={manifestUrl}
      actionsConfiguration={{
        twaReturnUrl: 'https://' + window.location.host,
      }}
    >
      {children}
    </TonConnectUIProvider>
  );
};
