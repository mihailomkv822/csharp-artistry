import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["C#", ".NET Core", ".NET Framework", "ASP.NET MVC", "Python", "GoLang", "React.js", "Angular", "Vue", "JavaScript", "TypeScript", "WPF", "WinForms", "WinUI"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Azure", "AWS", "GCP", "Docker", "Kubernetes", "Terraform", "Azure DevOps", "CI/CD"],
  },
  {
    title: "Data & Messaging",
    skills: ["SQL Server", "CosmosDB", "DynamoDB", "Entity Framework", "Kafka", "RabbitMQ", "Azure Service Bus", "Azure Event Grid"],
  },
  {
    title: "Architecture & Practices",
    skills: ["Microservices", "TOGAF", "SOLID", "TDD/BDD", "Agile", "UML", "REST APIs", "Event-Driven Design"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
            // Skills
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card/50 glow-border"
            >
              <h3 className="font-mono text-primary text-sm mb-5">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
