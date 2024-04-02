import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
  safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			colors: {
				border: "#E0E0E0",
				"slot-background": "#FAFAFA",
				input: "#F5F5F5",
				ring: "#FFD740",
				background: "#FAFAFA",
				foreground: "#FAFAFA",
				surface: "#F",
				primary: "#333",
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: "#FF5252",
				muted: "#9E9E9E",
				accent: "#FFD740",
				popover: "#fff",
				card: "#FAFAFA",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			},
			screens: {
				"2xl": "1400px",
				"3xl": "1600px"
			},
		}
	},
};

export default config;
