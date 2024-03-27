import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import '@rainbow-me/rainbowkit/styles.css';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <NavBar></NavBar>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
    </main>
  );
}
