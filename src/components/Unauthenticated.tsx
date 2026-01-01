import React from 'react';

interface UnauthenticatedProps {
    children: React.ReactNode;
    title?: React.ReactNode;
    links?: React.ReactNode;
}

export const Unauthenticated: React.FC<UnauthenticatedProps> = ({ children, title, links }) => {
    return (
        <div className="u-flex u-main-center u-cross-center u-height-100-percent">
             <div className="card u-width-full-line u-max-width-500">
                <div className="u-flex u-gap-16 u-flex-vertical">
                    <div className="u-flex u-gap-16 u-main-space-between u-cross-center">
                        <img
                            src="/logos/appwrite.png"
                            alt="Appwrite"
                            height="24"
                        />
                    </div>
                    {title && <h1 className="heading-level-4">{title}</h1>}
                    {children}
                    {links && (
                        <div className="u-flex u-gap-16 u-main-center u-margin-block-start-16">
                            <ul className="inline-links is-center is-with-sep">
                                {links}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
