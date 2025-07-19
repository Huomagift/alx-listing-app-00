// Props for Card component
export interface CardProps {
  title: string
  description?: string
  imageUrl?: string
  onClick?: () => void
}

// Props for Button component
export interface ButtonProps {
  label: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'danger'
}
