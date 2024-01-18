import React from 'react';
import './button.css';

interface ButtonProps {
  primary: boolean;
  backgroundColor?: string | null;
  radius?: number; // border radius
  size: 'small' | 'medium' | 'large';
  label: string;
  onClick: () => void;
}

export const Button = ({
  primary = false,
  backgroundColor = null,
  radius,
  size = 'medium',
  label,
  onClick,
  ...props
}: ButtonProps) => {

  const buttonClass = 'storybook-button';
  const sizeClass = `storybook-button--${size}`;
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  const buttonClasses = [buttonClass, sizeClass, mode, buttonClass.trim()];

  const buttonStyle: React.CSSProperties = {
    backgroundColor: backgroundColor || undefined,
    borderRadius: radius ? `${radius}px` : undefined,
  };

  return (
    <button
      type="button"
      className={buttonClasses.join(' ')}
      style={buttonStyle}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
