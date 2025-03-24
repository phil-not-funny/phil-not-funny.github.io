import FancyPageNavigation from "@/components/pageSpecific/FancyPageNavigation";
import WelcomeMessage from "@/components/pageSpecific/WelcomeMessage";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className="flex min-h-screen w-full flex-col items-center justify-center">
        <WelcomeMessage />
      </div>
      <div className="min-h-[50vh]">
        <FancyPageNavigation />
      </div>
    </Fragment>
  );
}
