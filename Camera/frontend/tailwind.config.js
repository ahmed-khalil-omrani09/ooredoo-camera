import defaultTheme from "tailwindcss/defaultTheme";
import twAnimateCss from "tw-animate-css";

export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,css}",
    "./src/index.css",
    "./index.html",
  ],

  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        card: "var(--color-card)",
        "card-foreground": "var(--color-card-foreground)",
        popover: "var(--color-popover)",
        "popover-foreground": "var(--color-popover-foreground)",
        primary: "var(--color-primary)",
        "primary-foreground": "var(--color-primary-foreground)",
        secondary: "var(--color-secondary)",
        "secondary-foreground": "var(--color-secondary-foreground)",
        muted: "var(--color-muted)",
        "muted-foreground": "var(--color-muted-foreground)",
        accent: "var(--color-accent)",
        "accent-foreground": "var(--color-accent-foreground)",
        destructive: "var(--color-destructive)",
        border: "var(--color-border)",
        input: "var(--color-input)",
        ring: "var(--color-ring)",
        chart1: "var(--color-chart-1)",
        chart2: "var(--color-chart-2)",
        chart3: "var(--color-chart-3)",
        chart4: "var(--color-chart-4)",
        chart5: "var(--color-chart-5)",
        sidebar: "var(--color-sidebar)",
        "sidebar-foreground": "var(--color-sidebar-foreground)",
        "sidebar-primary": "var(--color-sidebar-primary)",
        "sidebar-primary-foreground": "var(--color-sidebar-primary-foreground)",
        "sidebar-accent": "var(--color-sidebar-accent)",
        "sidebar-accent-foreground": "var(--color-sidebar-accent-foreground)",
        "sidebar-border": "var(--color-sidebar-border)",
        "sidebar-ring": "var(--color-sidebar-ring)",
      },

      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },

      lineHeight: {
        relaxed: "1.625",
      },
    },
  },

  plugins: [twAnimateCss],
};
