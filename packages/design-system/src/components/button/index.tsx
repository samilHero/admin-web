import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'text' | 'contained' | 'outlined';
  icon?: boolean;
  text: string;
  backgroundColor: string;
  disabled?: boolean;
  onClick: () => void;
}

export function Button({
  variant = 'text',
  icon = false,
  text,
  backgroundColor,
  disabled = false,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button disabled={disabled} onClick={onClick} {...props}>
      {/* If the icon is true, render the icon component */}
      {/* {icon && <Icon />} */}
      {text}
    </button>
  );
}
