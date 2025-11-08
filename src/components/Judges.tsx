const Judges = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text-purple">
          Our Esteemed Judges
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Industry experts who will evaluate and guide our participants
        </p>
        
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-primary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-card rounded-lg p-8 shadow-neon-purple hover:shadow-neon-cyan transition-all duration-300">
              <img
                src="/placeholder.svg"
                alt="Judge"
                className="w-64 h-64 object-cover rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-2xl font-bold text-center text-primary mb-2">Judge Name</h3>
              <p className="text-center text-muted-foreground">
                Title & Organization
              </p>
              <p className="text-center text-sm text-foreground/80 mt-2">
                (Image placeholder - will be replaced)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Judges;
