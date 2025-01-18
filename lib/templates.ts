import html from "@/components/framework-logos/html";
import type { Opengraph } from "./type";
import svelte from "@/components/framework-logos/svelte";


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
     icon: html
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
    icon: svelte
  }
} as Record<string, { code: (og: Opengraph) => string , icon: any }>;
