import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

type ButtonLinkProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>;

export function PrimaryButton({ children, className = '', ...props }: ButtonLinkProps) {
    return (
        <a className={`inline-flex min-h-12 items-center gap-3 rounded-pill bg-text-primary px-6 text-button font-extrabold text-white shadow-floating transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-soft sm:min-h-14 sm:px-8 ${className}`} {...props}>
            {children}
        </a>
    );
}

export function TextButton({ children, className = '', ...props }: ButtonLinkProps) {
    return (
        <a className={`link-hover-primary inline-flex items-center gap-3 text-button font-extrabold text-text-primary ${className}`} {...props}>
            {children}
        </a>
    );
}
