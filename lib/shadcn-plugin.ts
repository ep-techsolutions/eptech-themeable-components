import { fontFamily as defaultFontFamily } from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

interface ThemeColors {
  background?: string
  foreground?: string
  muted?: string
  mutedForeground?: string
  popover?: string
  popoverForeground?: string
  border?: string
  input?: string
  card?: string
  cardForeground?: string
  primary?: string
  primaryForeground?: string
  secondary?: string
  secondaryForeground?: string
  accent?: string
  accentForeground?: string
  destructive?: string
  destructiveForeground?: string
  ring?: string
  radius?: string
}

interface ThemeConfig {
  colors: {
    light: ThemeColors
    dark: ThemeColors
  }
  typography: {
    fontFamily?: string
  }
  dimensions: {
    radius: string
  }
}

export const createThemedPlugin = (config: ThemeConfig) => {
  const {
    colors: { light, dark },
    typography: { fontFamily = 'Roboto' },
    dimensions: { radius },
  } = config
  return plugin(
    ({ addBase }) => {
      addBase({
        ':root': {
          '--font-family': `${fontFamily}, sans-serif`,
          '--background': light.background || '0 0% 100%',
          '--foreground': light.foreground || '222.2 47.4% 11.2%',
          '--muted': light.muted || '210 40% 96.1%',
          '--muted-foreground': light.mutedForeground || '215.4 16.3% 46.9%',
          '--popover': light.popover || '0 0% 100%',
          '--popover-foreground': light.popoverForeground || '222.2 47.4% 11.2%',
          '--border': light.border || '214.3 31.8% 91.4%',
          '--input': light.input || '214.3 31.8% 91.4%',
          '--card': light.card || '0 0% 100%',
          '--card-foreground': light.cardForeground || '222.2 47.4% 11.2%',
          '--primary': light.primary || '222.2 47.4% 11.2%',
          '--primary-foreground': light.popoverForeground || '210 40% 98%',
          '--secondary': light.secondary || '210 40% 96.1%',
          '--secondary-foreground': light.secondaryForeground || '222.2 47.4% 11.2%',
          '--accent': light.accent || '210 40% 96.1%',
          '--accent-foreground': light.accentForeground || '222.2 47.4% 11.2%',
          '--destructive': light.destructive || '0 100% 50%',
          '--destructive-foreground': light.destructiveForeground || '210 40% 98%',
          '--ring': light.ring || '215 20.2% 65.1%',
          '--radius': radius || '0.5rem',
        },
        '.dark': {
          '--background': dark.background || '224 71% 4%',
          '--foreground': dark.foreground || '213 31% 91%',
          '--muted': dark.muted || '223 47% 11%',
          '--muted-foreground': dark.mutedForeground || '215.4 16.3% 56.9%',
          '--accent': dark.accent || '216 34% 17%',
          '--accent-foreground': dark.accentForeground || '210 40% 98%',
          '--popover': dark.popover || '224 71% 4%',
          '--popover-foreground': dark.popoverForeground || '215 20.2% 65.1%',
          '--border': dark.border || '216 34% 17%',
          '--input': dark.input || '216 34% 17%',
          '--card': dark.card || '224 71% 4%',
          '--card-foreground': dark.cardForeground || '213 31% 91%',
          '--primary': dark.primary || '210 40% 98%',
          '--primary-foreground': dark.primaryForeground || '222.2 47.4% 1.2%',
          '--secondary': dark.secondary || '222.2 47.4% 11.2%',
          '--secondary-foreground': dark.secondaryForeground || '210 40% 98%',
          '--destructive': dark.destructive || '0 63% 31%',
          '--destructive-foreground': dark.destructiveForeground || '210 40% 98%',
          '--ring': dark.ring || '216 34% 17%',
        },
      })
      addBase({
        '*': {
          '@apply border-border': {},
        },
        body: {
          '@apply bg-background text-foreground': {},
          'font-feature-settings': '"rlig" 1, "calt" 1',
        },
      })
    },
    {
      theme: {
        container: {
          center: true,
          padding: '2rem',
          screens: {
            '2xl': '1400px',
          },
        },
        extend: {
          colors: {
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: {
              DEFAULT: 'hsl(var(--primary))',
              foreground: 'hsl(var(--primary-foreground))',
            },
            secondary: {
              DEFAULT: 'hsl(var(--secondary))',
              foreground: 'hsl(var(--secondary-foreground))',
            },
            destructive: {
              DEFAULT: 'hsl(var(--destructive))',
              foreground: 'hsl(var(--destructive-foreground))',
            },
            muted: {
              DEFAULT: 'hsl(var(--muted))',
              foreground: 'hsl(var(--muted-foreground))',
            },
            accent: {
              DEFAULT: 'hsl(var(--accent))',
              foreground: 'hsl(var(--accent-foreground))',
            },
            popover: {
              DEFAULT: 'hsl(var(--popover))',
              foreground: 'hsl(var(--popover-foreground))',
            },
            card: {
              DEFAULT: 'hsl(var(--card))',
              foreground: 'hsl(var(--card-foreground))',
            },
          },
          borderRadius: {
            lg: `var(--radius)`,
            md: `calc(var(--radius) - 2px)`,
            sm: 'calc(var(--radius) - 4px)',
          },
          fontFamily: {
            sans: ['var(--font-family)', ...defaultFontFamily.sans],
          },
          keyframes: {
            'accordion-down': {
              from: { height: '0' },
              to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
              from: { height: 'var(--radix-accordion-content-height)' },
              to: { height: '0' },
            },
          },
          animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
          },
        },
      },
    }
  )
}
