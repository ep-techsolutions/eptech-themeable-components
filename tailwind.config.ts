/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'
import { config as dotenv } from 'dotenv'
import { createThemedPlugin } from './lib/shadcn-plugin'

dotenv()

const themeConfig = {
  colors: {
    light: {
      primary: process.env.PRIMARY_COLOR,
      primaryForeground: process.env.PRIMARY_FOREGROUND_COLOR,
      accent: process.env.ACCENT_COLOR,
      accentForeground: process.env.ACCENT_FOREGROUND_COLOR,
      background: process.env.BACKGROUND_COLOR,
      backgroundForeground: process.env.BACKGROUND_FOREGROUND_COLOR,
      border: process.env.BORDER_COLOR,
      card: process.env.CARD_COLOR,
      cardForeground: process.env.CARD_FOREGROUND_COLOR,
      error: process.env.ERROR_COLOR,
      destructive: process.env.DESTRUCTIVE_COLOR,
      destructiveForeground: process.env.DESTRUCTIVE_FOREGROUND_COLOR,
      success: process.env.SUCCESS_COLOR,
      foreground: process.env.FOREGROUND_COLOR,
      input: process.env.INPUT_COLOR,
      muted: process.env.MUTED_COLOR,
      mutedForeground: process.env.MUTED_FOREGROUND_COLOR,
      popover: process.env.POPOVER_COLOR,
      popoverForeground: process.env.POPOVER_FOREGROUND_COLOR,
      secondary: process.env.SECONDARY_COLOR,
      radius: process.env.RADIUS,
      secondaryForeground: process.env.SECONDARY_FOREGROUND_COLOR,
    },
    dark: {
      primary: process.env.DARK_PRIMARY_COLOR,
      primaryForeground: process.env.DARK_PRIMARY_FOREGROUND_COLOR,
      accent: process.env.DARK_ACCENT_COLOR,
      accentForeground: process.env.DARK_ACCENT_FOREGROUND_COLOR,
      background: process.env.DARK_BACKGROUND_COLOR,
      backgroundForeground: process.env.DARK_BACKGROUND_FOREGROUND_COLOR,
      border: process.env.DARK_BORDER_COLOR,
      card: process.env.DARK_CARD_COLOR,
      cardForeground: process.env.DARK_CARD_FOREGROUND_COLOR,
      error: process.env.DARK_ERROR_COLOR,
      destructive: process.env.DARK_DESTRUCTIVE_COLOR,
      destructiveForeground: process.env.DARK_DESTRUCTIVE_FOREGROUND_COLOR,
      success: process.env.DARK_SUCCESS_COLOR,
      foreground: process.env.DARK_FOREGROUND_COLOR,
      input: process.env.DARK_INPUT_COLOR,
      muted: process.env.DARK_MUTED_COLOR,
      mutedForeground: process.env.DARK_MUTED_FOREGROUND_COLOR,
      popover: process.env.DARK_POPOVER_COLOR,
      popoverForeground: process.env.DARK_POPOVER_FOREGROUND_COLOR,
      secondary: process.env.DARK_SECONDARY_COLOR,
      radius: process.env.DARK_RADIUS,
      secondaryForeground: process.env.DARK_SECONDARY_FOREGROUND_COLOR,
    },
  },
  typography: { fontFamily: process.env.FONT_FAMILY },
  dimensions: {
    radius: process.env.RADIUS ?? '0.5rem',
  },
}

const themedPlugin = createThemedPlugin(themeConfig)

const config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class'],
  safelist: ['dark'],
  plugins: [animatePlugin, themedPlugin],
} satisfies Config

module.exports = config
