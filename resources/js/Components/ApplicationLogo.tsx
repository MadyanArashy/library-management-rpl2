import { ImgHTMLAttributes } from 'react';

export default function ApplicationLogo({ className, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            src="images/library.png"
            alt="Logo Perpus"
            className={`default-logo-class ${className}`} // Combine default class with incoming className
            {...props}
        />
    );
}
