---
title: "Arquitetura de Agentes com RAG/MCP e n8n"
excerpt: "Arquitetura para sistemas de agentes com memória, ferramentas, RAG, MCP, validação temporal e automação operacional integrada a GitHub e Notion."
header:
  overlay_color: "#111827"
  overlay_filter: "0.55"
  overlay_image: /assets/images/imagem_5.png
  teaser: /assets/images/imagem_5.png
sidebar:
  - title: "Stack"
    text: "n8n, LLMs, RAG, MCP, agentes de IA, GitHub, Notion, webhooks"
  - title: "Área"
    text: "Automação, produtividade, Agentic Workflows, DevOps e gestão de projetos"
  - title: "Competências"
    text: "Integração de APIs, memória de agentes, orquestração, validação temporal e automação"
---

Este projeto organiza uma arquitetura para automação inteligente com agentes de IA, conectando GitHub, modelos de linguagem, memória, ferramentas e Notion em um fluxo operacional. A proposta é ir além de um workflow linear: o sistema precisa manter contexto, estruturar informação, acionar ferramentas e apoiar decisões.

## Fluxo

- Um webhook do GitHub captura novas issues e seus metadados.
- Um nó de IA extrai objetivo, prioridade, contexto, responsáveis e próximos passos.
- Um agente organiza a informação, gera resumo, mantém contexto operacional e aciona ferramentas.
- Camadas de RAG/MCP podem conectar documentos, memória e serviços externos ao fluxo.
- O resultado é enviado ao Notion como tarefa estruturada em um board de projeto.

## Benefícios

- Menos tempo gasto copiando e formatando informações entre ferramentas.
- Priorização mais clara a partir de texto não estruturado.
- Registro centralizado e atualizado para acompanhamento de execução.
- Base reutilizável para casos empresariais de triagem, suporte, documentação e gestão técnica.

## Valor técnico

O projeto demonstra uso prático de Agentic Workflows para resolver um problema real de operação. Em vez de apenas chamar um modelo, o fluxo integra eventos, memória, estruturação de dados, ferramentas e criação de tarefas em um sistema coeso.
