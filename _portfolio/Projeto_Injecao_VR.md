---
title: "Simulador Háptico VR para Treinamento de Injeção Médica"
excerpt: "Simulador de treinamento médico em realidade virtual com feedback tátil, sensores e comunicação em tempo real entre ambiente digital e dispositivo físico."
header:
  overlay_color: "#111827"
  overlay_filter: "0.55"
  overlay_image: /assets/images/imagem_4.png
  teaser: /assets/images/imagem_4.png
sidebar:
  - title: "Stack"
    text: "A-Frame, SOFA Framework, ESP32, FSR, WebSocket, interface háptica"
  - title: "Aplicação"
    text: "Educação médica, treinamento técnico, pesquisa em háptica e simulação"
  - title: "Repositório"
    url: "https://github.com/Rangel-Unifesp/Porjeto_VR_injecao_medica"
    btn_label: "Ver no GitHub"
    btn_class: "btn--github"
---

O projeto cria um simulador háptico para treinamento de injeções intramusculares, combinando realidade virtual, sensores e controle embarcado. A ideia é oferecer um ambiente seguro para prática, com feedback objetivo sobre força, profundidade, tempo e precisão.

## Problema

Treinamentos práticos em procedimentos invasivos dependem de materiais específicos, supervisão contínua e repetição controlada. Simuladores comerciais podem ser caros, e muitas soluções digitais não entregam feedback físico suficiente para aproximar a experiência do procedimento real.

## Solução

- Ambiente de realidade virtual acessível pelo navegador com A-Frame.
- Simulação física para resposta realista do tecido.
- Interface háptica de baixo custo com motor, sensor FSR e ESP32.
- Comunicação via WebSocket entre a cena virtual e o dispositivo físico.
- Métricas de desempenho para orientar treino e avaliação.

## Impacto

A plataforma pode apoiar cursos de enfermagem, medicina e biomedicina, além de servir como base para pesquisa em interfaces hápticas e educação em saúde. O uso de hardware acessível torna o projeto mais viável para laboratórios e instituições com orçamento limitado.
