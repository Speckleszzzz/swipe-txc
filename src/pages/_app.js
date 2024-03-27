import "@/styles/globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [chain.mainnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit Demo',
});

const WagmiClient = createClient({
  connectors,
  provider
})

export default function App({ Component, pageProps }) {
  return(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>
        <NavBar></NavBar>
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
  )
}
