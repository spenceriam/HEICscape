/**
 * IMPORTANT: Tailwind CSS v4 Compatibility Configuration
 * 
 * This configuration addresses specific issues with Tailwind CSS v4 (beta).
 * DO NOT modify this configuration without testing thoroughly.
 * See the detailed explanation in build.md under "🚨 Important: Tailwind CSS v4 Compatibility"
 * 
 * @type {import('tailwindcss').Config} 
 */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css}',
  ],
  theme: {
    extend: {},
  },
  // Disable color utilities that are causing issues in Tailwind v4
  corePlugins: {
    textColor: false,
    backgroundColor: false,
    borderColor: false,
    ringColor: false,
    divideColor: false
  },
  plugins: [],
}