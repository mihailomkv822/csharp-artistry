import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
            // About
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Building the <span className="text-gradient">backbone</span> of enterprise systems
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 mt-12"
        >
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Highly skilled Senior Software Engineer with over a decade of expertise
              in designing, developing, and optimizing enterprise-grade cloud-based
              applications and microservices architectures.
            </p>
            <p>
              Proven track record of leading technology modernization efforts at
              organizations like <span className="text-foreground font-medium">Elevance Health</span>,{" "}
              <span className="text-foreground font-medium">EviCore (Cigna)</span>, and{" "}
              <span className="text-foreground font-medium">Stanford University</span>.
              Passionate about mentorship, engineering excellence, and translating
              complex business requirements into elegant technical solutions.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { label: "Architecture", desc: "Scalable, TOGAF-certified systems design" },
              { label: "Cloud", desc: "Azure, AWS, GCP — IaaS, PaaS, SaaS" },
              { label: "Integration", desc: "Okta, Dynamics 365, third-party APIs" },
              { label: "Leadership", desc: "Team mentorship & cross-functional collaboration" },
            ].map((item, i) => (
              <div
                key={item.label}
                className="p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-all group"
              >
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.label}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
