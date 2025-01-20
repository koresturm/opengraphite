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
        <meta property="og:url" content="https://${og.domain}" />

        ${
          og.twitter
            ? ` 
          <meta name="twitter:title" content="${og.title}" />
          <meta name="twitter:description" content="${og.description}" />
          <meta name="twitter:card" content="${og.twitter.card}" />
          <meta name="twitter:site" content="@${og.twitter.site}" />
          <meta name="twitter:creator" content="@${og.twitter.creator}" />
        `
            : ""
        }
      </head>
          `;
    },
    icon: html,
    lang: "html",
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
        <meta property="og:url" content="https://${og.domain}" />

                ${
                  og.twitter
                    ? ` 
          <meta name="twitter:title" content="${og.title}" />
          <meta name="twitter:description" content="${og.description}" />
          <meta name="twitter:card" content="${og.twitter.card}" />
          <meta name="twitter:site" content="@${og.twitter.site}" />
          <meta name="twitter:creator" content="@${og.twitter.creator}" />
        `
                    : ""
                }
      </svelte:head>
          `;
    },
    icon: svelte,
    lang: "svelte",
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
    url: "https://${og.domain}",
    siteName: "${og.title}",
    images: [
      {
        url: "https://${og.domain}/opengraph.png",
        width: 1200,
        height: 630,
        alt: "${og.title}",
      },
    ],
  },

  ${
    og.twitter ?
    `
    twitter: {
    title: "${og.title}",
    description: "${og.description}",
    card: "${og.twitter?.card}",
    site: "@${og.twitter?.site}",
    creator: "@${og.twitter?.creator}",
  }
    ` : ''
  }
 } `;
    },
    icon: nextjs,
    lang: "javascript",
  },
} as Record<
  string,
  { code: (og: Opengraph) => string; icon: any; lang: string }
>;  