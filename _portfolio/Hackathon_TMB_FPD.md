---
title: "Hackathon TMB: Previsão de First Payment Default"
excerpt: "Solução campeã do Hackathon TMB para prever risco de First Payment Default antes da venda, combinando modelos de machine learning, validação cuidadosa e política comercial por faixas de risco."
header:
  overlay_color: "#111827"
  overlay_filter: "0.55"
  overlay_image: /assets/images/imagem_5.png
  teaser: /assets/images/imagem_5.png
sidebar:
  - title: "Resultado"
    text: "1º lugar no Hackathon TMB; ROC AUC aproximado de 0,8"
  - title: "Stack"
    text: "Python, Pandas, Scikit-learn, LightGBM, XGBoost, CatBoost, validação OOF"
  - title: "Área"
    text: "Machine learning, risco de crédito, FPD, política comercial e validação de modelos"
---

Projeto campeão do Hackathon TMB, desenvolvido para prever risco de **First Payment Default (FPD)** antes da venda. A solução combinou modelagem preditiva, validação cuidadosa e uma estratégia operacional para apoiar decisões comerciais baseadas em risco.

## Problema

Empresas precisam reduzir prejuízos causados por inadimplência precoce sem bloquear bons clientes nem prejudicar a conversão. O desafio é identificar risco antes da venda e transformar a previsão do modelo em uma política de decisão clara para o negócio.

## Solução

- Engenharia de atributos para representar comportamento e perfil de risco.
- Treinamento e comparação de modelos de classificação.
- Uso de modelos como LightGBM, XGBoost e CatBoost.
- Validação out-of-fold para reduzir otimismo na avaliação.
- Definição de faixas de risco e thresholds para apoiar uma política comercial.

## Resultado

A solução conquistou **1º lugar no Hackathon TMB**, com ROC AUC aproximado de **0,8**. O diferencial não foi apenas a métrica: o modelo foi conectado a uma proposta operacional para tomada de decisão, reduzindo risco sem transformar a análise em uma barreira comercial cega.

## Impacto

O projeto demonstra capacidade de unir ciência de dados e visão de negócio. Em vez de entregar apenas um score, a solução traduz o resultado do modelo em uma política prática para priorização, aprovação, revisão ou bloqueio conforme o nível de risco.
