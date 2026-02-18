import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F1E8',
        peach: '#FFE5D9',
        gray: '#D4CFC9',
        gold: '#D4AF77',
      },
    },
  },
  plugins: [],
}
export default config
