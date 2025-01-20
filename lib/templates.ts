import type { Opengraph } from "./type";
import html from "@/components/framework-logos/html";
import svelte from "@/components/framework-logos/svelte";
import nextjs from "@/components/framework-logos/nextjs";

export default {
  html: {
    code(og: Opengraph) {
      return `
      <head>
  
        <title>${og.title}</title>
        <meta name="description" content="${og.description}" />
  
        <meta property="og:title" content="${og.title}" />
        <meta property="og:description" content="${og.description}" />
        <meta property="og:type" content="${og.type}" />
        <meta property="og:url" content="${og.url}" />
      </head>
          `;
    },
    icon: html,
    lang: 'html'
  },
  svelte: {
    code(og: Opengraph) {
      return `
      <svelte:head>
  
        <title>${og.title}</title>
        <meta name="description" content="${og.description}" />
  
        <meta property="og:title" content="${og.title}" />
        <meta property="og:description" content="${og.description}" />
        <meta property="og:type" content="${og.type}" />
        <meta property="og:url" content="${og.url}" />
      </svelte:head>
          `;
    },
    icon: svelte,
    lang: 'svelte'
  },
  nextjs: {
    code(og: Opengraph) {
      return `
  export const metadata: Metadata = {
  title: "${og.title}",
  description: "${og.description}",

  openGraph: {
    title: "${og.title}",
    description: "${og.description}",
    url: "${og.url}",
    siteName: "${og.title}",
    images: [
      {
        url: "${og.url}/opengraph.png",
        width: 1200,
        height: 630,
        alt: "${og.title}",
      },
    ],
  }
  }
      `;
    },
    icon: nextjs,
    lang: 'javascript'
  },
} as Record<string, { code: (og: Opengraph) => string; icon: any , lang: string }>;
