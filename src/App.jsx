import {
  ArrowUpRight,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Cpu,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Network,
  Rocket,
  ShieldCheck,
  Trophy,
} from "lucide-react";

import profilePhoto from "../assets/images/bio-photo.jpg";
import heroImage from "../assets/images/Imagem_pagina_inicial.png";
import bciImage from "../assets/images/imagem_0.png";
import chaosImage from "../assets/images/imagem_1.png";
import clinicImage from "../assets/images/imagem_2.png";
import eyeImage from "../assets/images/imagem_3.png";
import vrImage from "../assets/images/imagem_4.png";
import automationImage from "../assets/images/imagem_5.png";
import prosthesisImage from "../assets/images/imagem_6.png";

const links = {
  linkedin: "https://www.linkedin.com/in/jo%C3%A3o-victor-de-carvalho-rangel",
  github: "https://github.com/Joao-Victor-Rangel",
  email: "mailto:tecnicomecjoaorangel@gmail.com",
};

const stats = [
  { value: "1º", label: "lugar no Hackathon TMB" },
  { value: "0.8", label: "ROC AUC aproximado no case FPD" },
  { value: "3", label: "hackathons: Harvard, Nestlé e TMB" },
  { value: "2025", label: "mestrado UNIFESP em andamento" },
];

const experience = [
  {
    role: "Engenheiro de MLOps e pesquisador",
    org: "UNIFESP",
    period: "2025 - 2027",
    text: "Pesquisa em visão computacional em tempo real, Edge AI, métricas computacionais e validação experimental. Construção de pipeline com captura, inferência, baseline, análise de desempenho e documentação científica.",
    tags: ["MLOps", "Computer Vision", "Edge AI", "Research"],
  },
  {
    role: "Soluções digitais e IA aplicada",
    org: "Self Solutions",
    period: "Experiência profissional",
    text: "Atuação conectando problemas de negócio a automações, fluxos inteligentes, integrações e sistemas práticos. Ênfase em transformar demandas abertas em arquitetura e entrega mensurável.",
    tags: ["Automation", "AI Agents", "APIs", "Product"],
  },
  {
    role: "Competidor em hackathons",
    org: "Harvard, Nestlé e TMB",
    period: "Desafios de inovação",
    text: "Participação em desafios competitivos de tecnologia aplicada, com destaque para o primeiro lugar no Hackathon TMB usando machine learning para previsão de First Payment Default.",
    tags: ["Hackathons", "ML", "Business", "Pitch"],
  },
];

const projects = [
  {
    title: "Hackathon TMB: previsão de FPD",
    category: "Machine Learning · campeão",
    image: automationImage,
    metric: "1º lugar · ROC AUC ~0.8",
    text: "Modelo de risco de crédito para prever First Payment Default antes da venda, com validação OOF, engenharia de atributos e política comercial por faixas de risco.",
    stack: ["Python", "Pandas", "LightGBM", "XGBoost", "CatBoost", "OOF"],
  },
  {
    title: "Mestrado UNIFESP",
    category: "Pesquisa aplicada · Edge AI",
    image: eyeImage,
    metric: "FPS · latência · F1 · erro angular",
    text: "Sistema de visão computacional em tempo real para interação humano-computador, com baseline, métricas geométricas e validação experimental.",
    stack: ["OpenCV", "YOLO", "Raspberry Pi", "MLOps", "Metrics"],
  },
  {
    title: "Agentes com RAG/MCP",
    category: "Agentic workflows",
    image: automationImage,
    metric: "eventos em tarefas estruturadas",
    text: "Arquitetura de automação com n8n, agentes, memória, ferramentas, RAG/MCP, GitHub e Notion para preservar contexto operacional.",
    stack: ["n8n", "LLMs", "RAG", "MCP", "Notion", "GitHub"],
  },
  {
    title: "MoreAutonomy BCI",
    category: "Tecnologia assistiva",
    image: bciImage,
    metric: "hardware + IA para autonomia",
    text: "Co-otimização de hardware e software para interfaces cérebro-computador não invasivas, mirando baixa latência e uso embarcado.",
    stack: ["EEG", "Deep Learning", "RL", "VR", "LGPD"],
  },
  {
    title: "Navegação por eye-tracking",
    category: "Visão computacional · acessibilidade",
    image: eyeImage,
    metric: "detecção local de obstáculos",
    text: "Sistema para cadeira de rodas com rastreamento ocular e YOLOv8 em Raspberry Pi, conectando visão computacional, controle e robótica assistiva.",
    stack: ["YOLOv8", "OpenCV", "Raspberry Pi", "Edge AI"],
  },
  {
    title: "Simulador háptico VR",
    category: "Healthtech · VR · IoT",
    image: vrImage,
    metric: "feedback tátil e métricas de treino",
    text: "Ambiente de treinamento médico em realidade virtual com sensores, ESP32, WebSocket e interface háptica de baixo custo.",
    stack: ["A-Frame", "ESP32", "WebSocket", "FSR", "VR"],
  },
];

const skills = [
  {
    icon: BrainCircuit,
    title: "IA aplicada e agentes",
    text: "LLMs, RAG, MCP, LangChain, LangGraph, memória, ferramentas e automação inteligente.",
  },
  {
    icon: Network,
    title: "MLOps e dados",
    text: "Pipelines, validação OOF/OOT, modelagem preditiva, métricas de produção, deploy e monitoramento.",
  },
  {
    icon: Cpu,
    title: "Edge AI e visão computacional",
    text: "OpenCV, YOLO, Raspberry Pi, inferência em tempo real, FPS, latência e sistemas embarcados.",
  },
  {
    icon: ShieldCheck,
    title: "Produto e validação",
    text: "Problema, métrica, protótipo, avaliação, limitações e comunicação para decisão técnica ou de negócio.",
  },
];

function App() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home" aria-label="Ir para o início">
          JVR
        </a>
        <div className="navLinks">
          <a href="#about">Sobre</a>
          <a href="#experience">Experiência</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="heroBackdrop" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">AI Engineer · Applied Researcher · MLOps</p>
            <h1>IA aplicada que vira sistema, métrica e decisão.</h1>
            <p className="heroText">
              Engenharia de IA, visão computacional, Edge AI, agentes, RAG/MCP e pesquisa aplicada para
              problemas em dados, saúde, acessibilidade e automação.
            </p>
            <div className="heroActions">
              <a className="button primary" href="#projects">
                Ver projetos <ArrowUpRight size={18} />
              </a>
              <a className="button" href={links.linkedin}>
                LinkedIn <Linkedin size={18} />
              </a>
              <a className="button ghost" href={links.github}>
                GitHub <Github size={18} />
              </a>
            </div>
          </div>

          <aside className="profilePanel">
            <img src={profilePhoto} alt="João Victor Rangel" />
            <div>
              <p>João Victor Rangel</p>
              <span>Engenheiro de IA & Pesquisador</span>
            </div>
          </aside>
        </div>

        <div className="statDock" aria-label="Destaques profissionais">
          {stats.map((item) => (
            <div className="stat" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section split">
        <div>
          <p className="eyebrow dark">Sobre</p>
          <h2>Uma ponte entre pesquisa, engenharia e produto.</h2>
        </div>
        <div className="longText">
          <p>
            Sou Engenheiro de IA e pesquisador aplicado com base em Engenharia Biomédica. Meu trabalho
            combina MLOps, visão computacional, Edge AI, agentes de IA e sistemas inteligentes com uma
            obsessão simples: provar valor com métrica e entregar algo que alguém consiga usar.
          </p>
          <p>
            Participei de hackathons ligados a Harvard, Nestlé e TMB, com destaque para o primeiro lugar
            no Hackathon TMB. No mestrado pela UNIFESP, investigo visão computacional em tempo real e
            validação experimental em ambiente embarcado.
          </p>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="sectionHead">
          <p className="eyebrow dark">Experiência</p>
          <h2>Onde minhas habilidades foram colocadas em prática.</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timelineItem" key={item.role}>
              <div className="timelineIcon">
                <BriefcaseBusiness size={20} />
              </div>
              <div className="timelineCard">
                <span>{item.period}</span>
                <h3>{item.role}</h3>
                <strong>{item.org}</strong>
                <p>{item.text}</p>
                <div className="tags">
                  {item.tags.map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skillsSection">
        <div className="sectionHead">
          <p className="eyebrow dark">Competências</p>
          <h2>O stack é amplo, mas o padrão é sempre o mesmo: problema, métrica, sistema, evidência.</h2>
        </div>
        <div className="skillGrid">
          {skills.map(({ icon: Icon, title, text }) => (
            <article className="skillCard" key={title}>
              <Icon size={26} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section projectsSection">
        <div className="sectionHead projectsHead">
          <div>
            <p className="eyebrow dark">Projetos</p>
            <h2>Cases com métrica, trade-off e impacto.</h2>
          </div>
          <div className="awardPill">
            <Trophy size={18} />
            Campeão Hackathon TMB
          </div>
        </div>

        <div className="projectGrid">
          {projects.map((project, index) => (
            <article className={index < 2 ? "projectCard large" : "projectCard"} key={project.title}>
              <img src={project.image} alt="" />
              <div className="projectBody">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <strong>{project.metric}</strong>
                <div className="tags">
                  {project.stack.map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section proofSection">
        <div className="proofCard">
          <Award size={28} />
          <h2>Hackathons Harvard, Nestlé e TMB</h2>
          <p>
            Esses desafios entram como prova de repertório competitivo: leitura rápida de problema,
            prototipagem sob pressão, apresentação e defesa de solução. No TMB, o resultado foi
            primeiro lugar com um case de machine learning para risco de crédito.
          </p>
        </div>
        <div className="proofCard accent">
          <Rocket size={28} />
          <h2>O que eu quero construir</h2>
          <p>
            Sistemas de IA que sejam úteis, mensuráveis e operáveis: modelos que sustentam decisões,
            agentes que preservam contexto, pipelines que podem ser monitorados e interfaces que pessoas
            realmente conseguem usar.
          </p>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div>
          <p className="eyebrow">Contato</p>
          <h2>Vamos conversar sobre IA aplicada, MLOps, dados ou pesquisa.</h2>
        </div>
        <div className="footerActions">
          <a className="button primary" href={links.email}>
            <Mail size={18} /> E-mail
          </a>
          <a className="button" href={links.linkedin}>
            <Linkedin size={18} /> LinkedIn
          </a>
          <a className="button ghost" href={links.github}>
            <Github size={18} /> GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
