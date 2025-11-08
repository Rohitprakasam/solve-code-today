import { useEffect, useState } from "react";

const sdgUrls = [
  "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-01.jpg",
  "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-02.jpg",
  "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-03.jpg",
  "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-04.jpg",
  "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-05.jpg",
  "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-06.jpg",
  "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-07.jpg",
  "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-08.jpg",
  "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-09.jpg",
  "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-10.jpg",
  "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-11.jpg",
  "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-12.jpg",
  "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-13.jpg",
  "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-14.jpg",
  "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-15.jpg",
  "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-16.jpg",
  "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-17.jpg",
];

interface FloatingIcon {
  id: number;
  url: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  animationType: 'bounce-around' | 'bounce-diagonal';
}

const FloatingSDGsBackground = () => {
  const [floatingIcons, setFloatingIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    // Generate random positions for SDG icons with bouncing animations
    const icons: FloatingIcon[] = sdgUrls.map((url, index) => ({
      id: index,
      url,
      x: Math.random() * 90,
      y: Math.random() * 90,
      size: 40 + Math.random() * 30, // 40-70px (smaller size)
      duration: 12 + Math.random() * 8, // 12-20s
      delay: Math.random() * 5, // 0-5s delay
      animationType: index % 2 === 0 ? 'bounce-around' : 'bounce-diagonal',
    }));
    setFloatingIcons(icons);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-15">
      {floatingIcons.map((icon) => (
        <div
          key={icon.id}
          className="absolute"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            animation: `${icon.animationType} ${icon.duration}s ease-in-out infinite`,
            animationDelay: `${icon.delay}s`,
          }}
        >
          <img
            src={icon.url}
            alt={`SDG ${icon.id + 1}`}
            className="w-full h-full object-contain rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingSDGsBackground;
