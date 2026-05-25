---
title: "Navegação Assistiva com Eye-Tracking e YOLOv8"
excerpt: "Sistema para controle de cadeira de rodas por rastreamento ocular, com detecção de obstáculos em tempo real usando visão computacional embarcada."
header:
  overlay_color: "#111827"
  overlay_filter: "0.55"
  overlay_image: /assets/images/imagem_3.png
  teaser: /assets/images/imagem_3.png
sidebar:
  - title: "Stack"
    text: "Python, YOLOv8n, OpenCV, Raspberry Pi, Edge AI, ponte H"
  - title: "Área"
    text: "Tecnologia assistiva, visão computacional, robótica e acessibilidade"
  - title: "Papel"
    text: "Arquitetura do sistema, controle, IA embarcada e integração com hardware"
---

Este projeto desenvolve um sistema de navegação assistiva para cadeiras de rodas, combinando rastreamento ocular e detecção de obstáculos em tempo real. A proposta é oferecer uma alternativa de controle para pessoas com mobilidade reduzida, sem depender de joysticks ou interfaces físicas tradicionais.

## Como funciona

- O módulo de eye-tracking interpreta movimentos oculares como comandos de direção.
- Um modelo YOLOv8n detecta obstáculos no ambiente em tempo real.
- O processamento roda localmente em Raspberry Pi para reduzir latência e dependência de rede.
- A comunicação com os motores é feita por ponte H, permitindo controle direto de movimentação.

## Impacto

A solução prioriza autonomia, segurança e acessibilidade. O funcionamento local aumenta a confiabilidade em ambientes reais, enquanto a detecção de obstáculos cria uma camada adicional de proteção para o usuário.

## Valor técnico

O projeto integra visão computacional, controle embarcado e requisitos de segurança em um único sistema, demonstrando capacidade de trabalhar no cruzamento entre IA, robótica e aplicação biomédica.
