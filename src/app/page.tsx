import WelcomeMessage from "@/components/pageSpecific/WelcomeMessage";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen">
      <WelcomeMessage />
    </div>
  );
}
