import { Inter } from "next/font/google";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import HomePage from "./home";
<link
  rel="preload"
  href="adrippingmarker.woff2"
  as="font"
  type="font/woff2"
  crossorigin
></link>;
<link
  rel="preload"
  href="Outfit-Thin.woff2"
  as="font"
  type="font/woff2"
  crossorigin
></link>;
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-[#011f19]">
      <Header />
      <HomePage />
      <Footer />
    </main>
  );
}
