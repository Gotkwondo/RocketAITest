import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Image1 from "@/assets/Image1.svg";
import Text from "@/assets/Text.svg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="max-w-md">
      <Image src={Image1} alt='인트로 이미지' />
      <Image src={Text} alt='인트로 텍스트' />
    </div>
  );
}
