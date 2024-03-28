import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import { ConnectButton } from '@rainbow-me/rainbowkit';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <ConnectButton></ConnectButton>
    </main>
  );
}
