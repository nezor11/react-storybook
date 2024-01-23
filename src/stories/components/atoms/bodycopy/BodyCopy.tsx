import React , { ReactNode, CSSProperties } from 'react';
import './bodycopy.css';

interface BodyCopyProps {
  tag: string;
  text: string;
  mods: string;
  styles?: CSSProperties;
  children?: ReactNode;
}

export const BodyCopy : React.FC<BodyCopyProps> = ({
  tag = 'div',
  text = 'Lorem fistrum ahorarr de la pradera no te digo trigo por no llamarte Rodrigor',
  mods = 'text-base',
  styles = {},
  ...props
}: BodyCopyProps) => {
  const Tag = tag as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={`text ${mods}`}
      style={styles}
      dangerouslySetInnerHTML={{ __html: text }}
      {...props}
    />
  );
};