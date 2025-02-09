
import { TonConnectUIProvider } from '@tonconnect/ui-react';

const manifestUrl = 'https://ton.org/app/manifest.json';

export const TonConnectProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TonConnectUIProvider
      manifestUrl={manifestUrl}
      actionsConfiguration={{
        twaReturnUrl: `https://${window.location.host}`,
      }}
      uiPreferences={{
        theme: 'SYSTEM'
      }}
    >
      {children}
    </TonConnectUIProvider>
  );
};
