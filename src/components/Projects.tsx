import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import fynloImg from "@/assets/projects/fynlo.png";
import poternaImg from "@/assets/projects/poterna.png";
import listelImg from "@/assets/projects/listel.png";
import bbu1Img from "@/assets/projects/bbu1.png";
import hostgridImg from "@/assets/projects/hostgrid.png";

const projects = [
  {
    title: "Fynlo Apps",
    description: "Bookkeeping SaaS platform for small businesses. Invoicing, expense tracking, and tax readiness — all in one place. Built with modern cloud architecture.",
    tags: [".NET Core", "Azure", "React", "SQL Server", "REST APIs", "Docker", "TypeScript"],
    image: fynloImg,
    url: "https://www.fynloapps.com/",
  },
  {
    title: "Poterna",
    description: "AI-powered analytics platform that delivers proactive data signals and actionable conversion insights for websites.",
    tags: ["C#", "Python", "Angular", "CosmosDB", "Azure Event Grid", "Microservices", "Terraform"],
    image: poternaImg,
    url: "https://www.poterna.com/",
  },
  {
    title: "Listel AI",
    description: "Enterprise-grade wearable platform for field sales. Captures in-person conversations hands-free for CRM and AI tools.",
    tags: [".NET Core", "Kafka", "Vue", "AWS", "DynamoDB", "Event-Driven Design", "Kubernetes"],
    image: listelImg,
    url: "https://www.listel.ai/",
  },
  {
    title: "BBU1",
    description: "Intelligent Business Operating System — a unified ERP platform engineered for growth, from startups to enterprise.",
    tags: ["C#", "WPF", "WinForms", "Azure", "Entity Framework", "SQL Server", "Microservices", "CI/CD"],
    image: bbu1Img,
    url: "http://www.bbu1.com/en",
  },
  {
    title: "HostGrid",
    description: "Custom domain management platform. Connect domains to any app or website with automatic SSL and zero-config setup.",
    tags: ["GoLang", "Docker", "Kubernetes", "GCP", "WinUI", "RabbitMQ", "Terraform", "REST APIs"],
    image: hostgridImg,
    url: "https://hostgrid.dev/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
            // Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative overflow-hidden rounded-xl border border-border"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-primary" />
                  </div>
                </a>
              </div>

              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-full border border-primary/30 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
