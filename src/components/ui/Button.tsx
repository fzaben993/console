import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    secondary?: boolean;
    text?: boolean;
    danger?: boolean;
    fullWidth?: boolean;
    submit?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    secondary,
    text,
    danger,
    fullWidth,
    submit,
    className = '',
    ...props
}) => {
    const classes = [
        'button',
        secondary ? 'is-secondary' : '',
        text ? 'is-text' : '',
        danger ? 'is-danger' : '',
        fullWidth ? 'u-width-full-width' : '',
        className
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button className={classes} type={submit ? 'submit' : 'button'} {...props}>
            {children}
        </button>
    );
};
