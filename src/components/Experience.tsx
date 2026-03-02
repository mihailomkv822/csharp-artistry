import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "C-Los Industries",
    period: "Aug 2024 — Present",
    highlights: [
      "Lead cloud-based ERP development with .NET, C#, and Azure",
      "Designed scalable architecture and database schema",
      "Implemented CI/CD pipelines via Azure DevOps",
      "Revit plugin development for CAD teams",
    ],
  },
  {
    role: "Senior Application Architect",
    company: "Elevance Health",
    period: "Aug 2022 — Jul 2024",
    highlights: [
      "Led enterprise-wide technology modernization",
      "Migrated 400K+ users to Okta IAM platform",
      "Integrated Bing Geolocation APIs across web & mobile",
      "Spearheaded cloud services innovation (IaaS, PaaS, SaaS)",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "EviCore (Cigna)",
    period: "Nov 2020 — Mar 2022",
    highlights: [
      "Full-stack .NET Core + React development",
      "Kafka integration for real-time event-driven systems",
      "Microservices architecture migration from monolith",
      "Terraform infrastructure automation",
    ],
  },
  {
    role: "Lead Senior Programmer/Architect",
    company: "Transact Technologies",
    period: "Apr 2018 — Mar 2020",
    highlights: [
      "Designed enterprise-scale cloud solutions",
      "Dynamics 365 customization & Power Automate workflows",
      "Led engineering team with SOLID design patterns",
    ],
  },
  {
    role: "Software Engineer",
    company: "Stanford University",
    period: "Sep 2014 — Jul 2015",
    highlights: [
      "Built .NET applications for Residential & Dining Enterprises",
      "Cross-database reporting and vendor integration",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
            // Experience
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            Career <span className="text-gradient">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-4.5 top-2 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                <p className="font-mono text-xs text-primary mb-1">{exp.period}</p>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-muted-foreground font-medium mb-3">{exp.company}</p>
                <ul className="space-y-1.5">
                  {exp.highlights.map((h) => (
                    <li key={h} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-0.5">›</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
