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

const FloatingSDGs = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text-cyan">
          Sustainable Development Goals
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Discover how our competition aligns with the UN's 17 Sustainable Development Goals
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {sdgUrls.map((url, index) => (
            <div
              key={index}
              className="relative group cursor-pointer transition-smooth"
              style={{
                animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-neon-cyan hover:shadow-neon-purple transition-all duration-300 hover:scale-110">
                <img
                  src={url}
                  alt={`SDG Goal ${index + 1}`}
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                  <span className="text-primary font-bold text-sm">Goal {index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default FloatingSDGs;
