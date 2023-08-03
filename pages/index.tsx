import Header from "@/components/Header/Header";
import Popular from "@/components/Popular/Popular";
import Recommendation from "@/components/Recommendation/Recommendation";
import React from "react";

export default function Home() {
  return (
    <main className="bg-[#F6F7F9]">
      <Header />
      <Popular />
      <Recommendation/>
    </main>
  );
}
