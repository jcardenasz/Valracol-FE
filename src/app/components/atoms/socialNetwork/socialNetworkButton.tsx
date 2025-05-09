// src/components/atoms/SocialNetworkButton.tsx
import React from 'react';

interface SocialNetworkButtonProps {
  href: string;
  icon: React.ReactNode;
  alt: string;
}

const SocialNetworkButton: React.FC<SocialNetworkButtonProps> = ({ href, icon, alt }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={alt} className="p-2">
      {icon}
    </a>
  );
};

export default SocialNetworkButton;