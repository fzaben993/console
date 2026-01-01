import React from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    onSubmit: (e?: React.FormEvent) => void;
}

export const Form: React.FC<FormProps> = ({ onSubmit, children, ...props }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(e);
    };

    return (
        <form className="form" onSubmit={handleSubmit} {...props}>
            {children}
        </form>
    );
};
