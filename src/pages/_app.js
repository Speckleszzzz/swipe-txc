import "@/styles/globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";


console.log(process.env.PROJECT_ID);
const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: `${process.env.PROJECT_ID}`,
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});


const queryClient = new QueryClient();


export default function App({ Component, pageProps }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Component {...pageProps} />; 
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
