import type { Metadata } from "next";
import "./globals.css";
import StateComponent from "@/components/shared/StateComponent";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Opengraphite",
  description: "A simple tool to generate opengraph tags for your website.",
  keywords: "opengraph, opengraphite, opengraph generator, opengraph tags, opengraph code, opengraph html, opengraph svelte, opengraphite svelte, opengraphite html, opengraphite sveltekit, opengraphite react, opengraphite reactjs, opengrapgite react router, opengrapgite vite, opengrapgite vitejs, opengrapgite vite react, opengrapgite vite reactjs, opengrapgite vite react router, opengrapgite vite vitejs, opengrapgite vite vite react, opengrapgite vite vite reactjs, opengrapgite vite vite react router, opengrapgite vite vite vitejs",

  icons: [
    {
      rel: "icon",
      url: "/favicon.png",
      sizes: "64x64",
    }
  ],

  //Opengraph
  openGraph: {
    title: "Opengraphite",
    description: "A simple tool to generate opengraph tags for your website.",
    url: "https://opengraphite.vercel.app/",
    siteName: "Opengraphite",
    type: "website",
    images: [
      {
        url: "https://opengraphite.vercel.app/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Opengraphite",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Opengraphite",
    description: "A simple tool to generate opengraph tags for your website.",
    images: [
      {
        url: "https://opengraphite.vercel.app/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Opengraphite",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="dark"
      >
        <StateComponent>
          {children}
        </StateComponent>
        <Toaster />
      </body>
    </html>
  );
}
