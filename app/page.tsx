import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundLines } from "@/components/ui/background-lines";
import { NavbarDemo } from "@/components/custom-navbar-menu";

const words = ["Coding", "Lego", "Bodybuilding", "Gaming"];

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen">
      <NavbarDemo/>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 h-auto" svgOptions={{duration: 8}}>
        <div className="text-3xl mx-auto font-normal text-center text-neutral-700 dark:text-neutral-400">
          Hi 👋🏻, from
        </div>
        <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-purple-700 to-purple-500 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Paolo Concolato
        </h1>
        <div className="max-w-xl mx-auto text-xl md:text-3xl text-neutral-700 dark:text-neutral-400 text-center">
          I&apos;m in love with<br/>
          <FlipWords words={words} duration={1500} className="text-purple-500 dark:text-purple-200"/>
        </div>
      </BackgroundLines>
    </div>
  );
}
