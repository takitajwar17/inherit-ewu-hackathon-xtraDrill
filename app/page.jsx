import dynamic from "next/dynamic";

const LandingPage = dynamic(() => import("./components/LandingPage"), {
  ssr: false,
});

export default function Home() {
  return <LandingPage />;
}
