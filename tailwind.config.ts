import type { Config } from "tailwindcss";
export default {
  content:["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme:{extend:{colors:{ink:"#0b1f33",brand:"#0d9488",mint:"#dff7f3",sun:"#f59e0b"}}},
  plugins:[]
} satisfies Config;
