const teamMembers = [
  { name: "Team Member 1", role: "Organizer" },
  { name: "Team Member 2", role: "Technical Lead" },
  { name: "Team Member 3", role: "Event Coordinator" },
  { name: "Team Member 4", role: "Marketing Head" },
  { name: "Team Member 5", role: "Design Lead" },
  { name: "Team Member 6", role: "Operations Manager" },
];

const Team = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text-pink">
          Our Team
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Meet the dedicated team behind this amazing event
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                animation: `float ${3 + (index % 2)}s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="absolute -inset-1 bg-gradient-primary rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-card rounded-lg p-6 shadow-neon-cyan hover:shadow-neon-pink transition-all duration-300">
                <img
                  src="/placeholder.svg"
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-muted-foreground text-sm mb-2">{member.role}</p>
                <p className="text-xs text-foreground/60">
                  (Placeholder image - will be replaced)
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
};

export default Team;
