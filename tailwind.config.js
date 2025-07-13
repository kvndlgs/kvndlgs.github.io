/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#3B82F6',
          secondary: '#10B981',
          accent: '#8B5CF6',
          neutral: '#374151',
          'base-100': '#FFFFFF',
          'base-200': '#F9FAFB',
          'base-300': '#F3F4F6',
          info: '#06B6D4',
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
        },
      },
      {
        dark: {
          primary: '#60A5FA',
          secondary: '#34D399',
          accent: '#A78BFA',
          neutral: '#1F2937',
          'base-100': '#111827',
          'base-200': '#1F2937',
          'base-300': '#374151',
          info: '#22D3EE',
          success: '#34D399',
          warning: '#FBBF24',
          error: '#F87171',
        },
      },
    ],
  },
};