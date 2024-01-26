import { createGlobalStyle } from "styled-components";
import { Lora } from "next/font/google";
// import Icon from "./design-resources/icons";
// import React from "react";
// import { webpack } from "@svgr/webpack";
// import Image from "next/image";
// import styled from "styled-components";

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  :root {
    --font-family: ${lora.style.fontFamily}, serif;
   
      --color-earth: #282828;
      --color-clouds: #f1f1f1;
      --color-smoke: #d4d1cd;
    
      --font-headline-1: normal 700 44px/48px var(--font-family);
      --font-headline-2: normal 700 32px/41px var(--font-family);
      --font-title: normal 700 16px/20px var(--font-family);
      --font-caption: normal 500 12px/15px var(--font-family);
      --font-caption--italic: italic 400 12px/15px var(--font-family);
      --font-body: normal 400 16px/20px var(--font-family);
  
      --box-shadow-book: 0 4px 8px -2px rgba(0, 0, 0, 0.09),
        0 7px 4px -4px rgba(0, 0, 0, 0.07), 0 16px 8px -8px rgba(0, 0, 0, 0.07),
        0 22px 12px -12px rgba(0, 0, 0, 0.07), 0 2px 10px 0 rgba(0, 0, 0, 0.06);
    
      --box-shadow-book--hover: 0 6px 11px -2px rgba(0, 0, 0, 0.12),
        0 8px 7px -4px rgba(0, 0, 0, 0.09), 0 17px 11px -8px rgba(0, 0, 0, 0.09),
        0 24px 15px -12px rgba(0, 0, 0, 0.09), 0 4px 15px 0 rgba(0, 0, 0, 0.05);
    }

    // ### Dark Mode

  body {
    font-family: var(--font-family);
    margin: 0;
    font: var(--font-body);
    @media (prefers-color-scheme: light) {
      color: var(--color-earth);
      background-color: var(--color-clouds);
    }
    @media (prefers-color-scheme: dark) {
      color: var(--color-smoke);
      background-color: var(--color-earth);
    }
  }
  
  img {
    box-shadow: var(--box-shadow-book);
    &:hover {
      box-shadow: var(--box-shadow-book--hover);
    }
   
  `;
