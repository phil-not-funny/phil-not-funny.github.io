import WelcomeMessage from "@/components/pageSpecific/WelcomeMessage";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <WelcomeMessage />
    </div>
  );
}
