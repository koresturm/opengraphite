import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold">Opengraphite</h1>
      <p className="text-lg">
        A simple tool to generate opengraph tags for your website.
      </p>

      <Button asChild className="font-bold flex items-center gap-2">
        <Link href="/editor">
          Get Started
          <ArrowRightIcon />
        </Link>
      </Button>

      {/* <div className="w-full md:w-[600px] flex flex-col gap-4">
        <h2 className="text-xl font-bold">Features</h2>
        <ul className="list-disc list-inside">
          <li>Generate opengraph tags for your website</li>
          <li>Supports HTML, Svelte, and SvelteKit</li>
          <li>Customizable opengraph tags</li>
          <li>Copy-paste ready code</li>
        </ul>
      </div> */}
    </section>
  );
}
