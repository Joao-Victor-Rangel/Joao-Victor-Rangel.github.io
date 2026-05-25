---
title: "Hackathon TMB: Previsão de First Payment Default"
excerpt: "Solução campeã do Hackathon TMB para prever risco de First Payment Default antes da venda, combinando modelos de machine learning, validação robusta e política comercial por faixas de risco."
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

Case campeão do Hackathon TMB, desenvolvido para prever risco de **First Payment Default (FPD)** antes da venda. A solução foi pensada como um produto analítico: não apenas um modelo com boa métrica, mas um sistema de decisão que apoia política comercial.

## Pergunta de negócio

Como reduzir perda por inadimplência precoce sem bloquear bons clientes e destruir conversão?

Esse é o ponto central: em risco de crédito, o melhor modelo não é necessariamente o que mais bloqueia. A solução precisa separar risco alto de risco aceitável e entregar uma regra operacional compreensível para o negócio.

## Métrica principal

Usei **ROC AUC** como métrica principal para avaliar a capacidade do modelo de ordenar clientes por risco. O resultado ficou em torno de **0,8**, indicando boa separação entre casos de maior e menor propensão a FPD.

Além da métrica, a solução foi pensada para responder perguntas de decisão:

- quais clientes devem seguir fluxo normal;
- quais clientes precisam de revisão ou condição diferenciada;
- quais clientes representam risco alto demais;
- como calibrar thresholds conforme apetite de risco.

## Abordagem técnica

- Engenharia de atributos para representar perfil e comportamento de risco.
- Treinamento e comparação de modelos de classificação.
- Uso de modelos como LightGBM, XGBoost e CatBoost.
- Validação out-of-fold para reduzir otimismo na avaliação.
- Análise de thresholds para transformar score em política comercial.

## Decisão operacional

O modelo gera um score, mas o valor real está na política associada a ele. A proposta organiza clientes por faixas de risco e permite diferentes ações: aprovação, revisão, exigência de entrada maior, limite reduzido ou bloqueio.

Essa camada torna a solução mais útil para uma empresa, porque conecta ciência de dados à operação comercial.

## Próximos passos de produção

- Monitorar drift de dados e performance do modelo ao longo do tempo.
- Avaliar custo de falso positivo e falso negativo com dados financeiros reais.
- Criar dashboard de acompanhamento por safra.
- Versionar modelo, features e thresholds.
- Definir rotina de retreinamento e governança.

## Impacto

O projeto demonstra domínio de modelagem preditiva, validação e visão de negócio. A conquista do **1º lugar** reforça a capacidade de entregar sob pressão, comunicar a solução e transformar análise em decisão.
