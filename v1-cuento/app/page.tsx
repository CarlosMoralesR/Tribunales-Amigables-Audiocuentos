"use client";
import dynamic from "next/dynamic";

const NewTextImage = dynamic(() => import("../components/TextImage"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <NewTextImage></NewTextImage>
    </>
  );
}
