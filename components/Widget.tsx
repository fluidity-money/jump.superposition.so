"use client";

import type { WidgetConfig } from "@lifi/widget";
import { LiFiWidget, WidgetSkeleton } from "@lifi/widget";
import { ClientOnly } from "./ClientOnly";

export function Widget() {
  const config = {
    variant: "wide",
    appearance: "system",
    theme: {
      colorSchemes: {
        light: {
          palette: {
            primary: {
              main: "#1e1e1e",
            },
            secondary: {
              main: "#121212",
            },
            background: {
              default: "#f5f5f5",
              paper: "#f5f5f5",
            },
            text: {
              primary: "#101010",
              secondary: "#666666",
            },
            success: {
              main: "#9effae",
            },
            warning: {
              main: "#ffe785",
            },
            error: {
              main: "#ff9c8f",
            },
            info: {
              main: "#333333",
            },
            common: {
              black: "#1e1e1e",
              white: "#f5f5f5",
            },
            grey: {
              200: "#eeeeee",
              300: "#d9d9d9",
              700: "#666666",
              800: "#333333",
            },
          },
        },
        dark: {
          palette: {
            primary: {
              main: "#f5f5f5",
            },
            secondary: {
              main: "#ff9ef2",
            },
            background: {
              default: "#101010",
              paper: "#1e1e1e",
            },
            text: {
              primary: "#fafafa",
              secondary: "#eeeeee",
            },
            success: {
              main: "#9effae",
            },
            warning: {
              main: "#ffe785",
            },
            error: {
              main: "#ff9c8f",
            },
            info: {
              main: "#ff9ef2",
            },
            common: {
              black: "#101010",
              white: "#f5f5f5",
            },
            grey: {
              200: "#d9d9d9",
              300: "#b5b5b5",
              700: "#4a4a4a",
              800: "#383838",
            },
          },
        },
      },
      typography: {
        fontFamily: "Inter, sans-serif",
      },
      container: {
        boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.08)",
        borderRadius: "16px",
        maxHeight: 800,
      },
      shape: {
        borderRadius: 8,
        borderRadiusSecondary: 8,
      },
    },
  } as Partial<WidgetConfig>;

  return (
    <ClientOnly fallback={<WidgetSkeleton config={config} />}>
      <LiFiWidget config={config} integrator="nextjs-example" />
    </ClientOnly>
  );
}
