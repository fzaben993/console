import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({ label, id, className = '', fullWidth, ...props }) => {
    return (
        <div className={`input-text-wrapper ${fullWidth ? 'u-width-full-width' : ''}`}>
            <label className="text" htmlFor={id}>
                {label}
            </label>
            <div className="input-text-container">
                <input id={id} className={`input-text ${className}`} {...props} />
            </div>
        </div>
    );
};

export const InputEmail: React.FC<InputProps> = (props) => <Input type="email" {...props} />;

export const InputPassword: React.FC<InputProps> = (props) => <Input type="password" {...props} />;
