/**
 * IMPORTANT: Tailwind CSS v4 Compatibility Configuration
 * 
 * Using '@tailwindcss/postcss' instead of 'tailwindcss' is required for Tailwind CSS v4.
 * DO NOT change this to 'tailwindcss' or the styles will break.
 * See detailed explanation in build.md under "🚨 Important: Tailwind CSS v4 Compatibility"
 */
export default {
  plugins: {
    '@tailwindcss/postcss': {}, // Required for Tailwind CSS v4
    autoprefixer: {},
  },
};
