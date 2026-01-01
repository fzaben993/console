import React from 'react';

interface LayoutStackProps {
    children: React.ReactNode;
}

export const LayoutStack: React.FC<LayoutStackProps> = ({ children }) => {
    return (
        <ul className="form-list">
            {React.Children.map(children, (child) => (
                <li className="form-item">{child}</li>
            ))}
        </ul>
    );
};
