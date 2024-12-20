import React from 'react';
import { Link } from '@inertiajs/react';

export default function Button({className="", type = 'button', variant = 'primary', href, children, onClick, ...props }) {
    const baseStyles = 'w-full text-white font-semibold py-2 rounded-lg transition duration-200';

    const variantStyles = {
        primary: 'bg-primary hover:bg-purple-900',
        secondary: 'bg-gray-600 hover:bg-gray-900',
        danger: 'bg-red-600 hover:bg-red-900',
    };

    const styles = `${baseStyles} ${variantStyles[variant] || ''} ${className}`;

    // Render as a link if href is provided
    if (href) {
        return (
            <Link href={href} className={styles} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={styles} onClick={onClick} {...props}>
            {children}
        </button>
    );
};
