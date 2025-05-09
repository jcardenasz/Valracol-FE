import React, {useEffect} from "react";
import "./Transition.css";

interface TransitionProps {
    children: React.ReactNode;
    to: "top" | "bottom" | "left" | "right";
    className?: string;
}

export function Transition({children, to, className}: TransitionProps) {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            {
                threshold: 0.2, // Trigger when 20% of the element is visible
            }
        );

        const elements = document.querySelectorAll<HTMLElement>(".fade-in-" + to);
        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            elements.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, [to]);


    return (
        <div className={`fade-in-${to} ${className}`}>
            {children}
        </div>
    );
}