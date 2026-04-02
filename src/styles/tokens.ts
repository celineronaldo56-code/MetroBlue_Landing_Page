export const colours = {
  primary:   '#1A3C6E',
  secondary: '#0F9BD7',
  dark:      '#0D1B2A',
  light:     '#F0F7FF',
  white:     '#FFFFFF',
  grey:      '#64748B',
  border:    '#E2E8F0',
  success:   '#22C55E',
} as const

export type ColourKey = keyof typeof colours
