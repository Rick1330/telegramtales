
import { TonConnectUIProvider } from '@tonconnect/ui-react';

// Use a more reliable manifest URL from GitHub
const manifestUrl = 'https://raw.githubusercontent.com/ton-community/tutorials/main/03-wallet/test/public/tonconnect-manifest.json';

export const TonConnectProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TonConnectUIProvider 
      manifestUrl={manifestUrl}
      actionsConfiguration={{
        twaReturnUrl: `https://${window.location.host}` as `${string}://${string}`,
      }}
      connectRequestParameters={{
        state: 'ready',
        timeout: 60_000, // 60 seconds timeout
      }}
    >
      {children}
    </TonConnectUIProvider>
  );
};
