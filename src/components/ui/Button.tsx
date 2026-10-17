import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

type Variant = 'solid' | 'ghost';

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = BaseProps & { to?: never; href?: never } & ComponentPropsWithoutRef<'button'>;
type ButtonAsLink = BaseProps & { to: string; href?: never };
type ButtonAsAnchor = BaseProps & { href: string; to?: never; external?: boolean };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

/** Gumb koji može biti <button>, interni <Link> ili vanjski <a>. */
export function Button(props: ButtonProps) {
  const { variant = 'solid', children, className } = props;
  const cls = [styles.btn, styles[variant], className].filter(Boolean).join(' ');

  if ('to' in props && props.to) {
    return (
      <Link className={cls} to={props.to}>
        {children}
      </Link>
    );
  }
  if ('href' in props && props.href) {
    const ext = 'external' in props && props.external;
    return (
      <a className={cls} href={props.href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    );
  }
  const { variant: _v, className: _c, children: _ch, ...rest } = props as ButtonAsButton;
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}
