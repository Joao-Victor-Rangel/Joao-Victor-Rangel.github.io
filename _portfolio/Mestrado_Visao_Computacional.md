---
title: "Mestrado UNIFESP: Visão Computacional em Tempo Real"
excerpt: "Pesquisa de mestrado sobre sistema computacional de visão computacional em tempo real, com inferência, métricas computacionais, validação experimental e execução em ambiente embarcado."
header:
  overlay_color: "#111827"
  overlay_filter: "0.55"
  overlay_image: /assets/images/imagem_3.png
  teaser: /assets/images/imagem_3.png
sidebar:
  - title: "Instituição"
    text: "UNIFESP; pesquisa de mestrado em Engenharia Biomédica"
  - title: "Stack"
    text: "Visão computacional, OpenCV, YOLO como weak teacher, Raspberry Pi 4, métricas experimentais"
  - title: "Métricas"
    text: "FPS, latência, F1, MAE/RMSE angular, métricas geométricas e validação com participantes"
---

Pesquisa de mestrado na UNIFESP sobre um sistema computacional de visão computacional em tempo real, avaliado por métricas computacionais, geométricas e experimentais. O trabalho combina engenharia de software, IA aplicada, sistemas embarcados e metodologia científica.

## Problema de pesquisa

Como desenvolver e avaliar um sistema de visão computacional capaz de operar em tempo real, em ambiente embarcado, e produzir resultados mensuráveis em uma tarefa experimental com participantes?

O desafio não é apenas detectar algo em vídeo. O sistema precisa ser eficiente, repetível, comparável com baseline e suficientemente robusto para sustentar uma avaliação experimental.

## Hipótese

Um sistema próprio de visão computacional, apoiado por modelos de referência e validado em tarefa controlada, pode apresentar desempenho suficiente para aplicações de interação humano-computador em tempo real, mesmo em ambiente embarcado.

## Arquitetura do pipeline

- Captura de frames a partir de câmera ou fonte de vídeo.
- Pré-processamento da entrada visual.
- Sistema proposto de detecção ou estimativa.
- Uso de YOLO como referência, baseline ou weak teacher.
- Módulo de inferência e registro de eventos.
- Cálculo de métricas computacionais e geométricas.
- Avaliação experimental com participantes.

## Métricas

- **Computacionais:** FPS, latência e estabilidade de execução.
- **Detecção:** F1 e comparação com baseline.
- **Geométricas:** MAE, RMSE e erro angular quando aplicável.
- **Experimentais:** tempo de resposta, acertos, erros e comportamento na tarefa.

## Valor técnico

A força do projeto está na integração entre sistema técnico e protocolo experimental. O resultado esperado não é um notebook isolado, mas um pipeline mensurável, documentado e analisável, com limitações explícitas e caminho claro para evolução.

## Impacto

A pesquisa pode apoiar interfaces acessíveis, jogos, produtividade, sistemas inteligentes e tecnologias de interação visual de baixo custo. Ela também demonstra maturidade em pesquisa aplicada: formular hipótese, definir métrica, construir sistema, validar e comunicar resultados.
