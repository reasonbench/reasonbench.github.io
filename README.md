# ReasonBENCH: Benchmarking the (In)Stability of LLM Reasoning

This repository hosts the project page for **ReasonBENCH**, a benchmark suite and open-source library for controlled multi-run evaluation of LLM reasoning.

**Live page:** [reasonbench.github.io](https://reasonbench.github.io)

## About

LLM reasoning is typically evaluated using single runs, masking how much performance can vary across repeated executions. ReasonBENCH addresses this by performing repeated trials across 6 diverse benchmarks and reporting variance-aware metrics for both quality and cost, including confidence intervals and run-to-run variability measures.

Key highlights:
- 10 reasoning strategies benchmarked under identical model conditions
- 10 contemporary reasoning-oriented LLMs evaluated in a zero-shot setting
- 10 independent runs per model-strategy-task configuration
- Variance-aware metrics: confidence intervals, run deviation, noise measures

## Repository Structure

```
index.html        # Main project page
css/style.css     # Stylesheet
js/main.js        # Table sorting and interactions
assets/           # Paper PDF and figures
```

## Links

- **Code & Library:** [anonymous.4open.science/r/ReasonBench-64B3](https://anonymous.4open.science/r/ReasonBench-64B3)
- **Paper:** Available for download on the [project page](https://reasonbench.github.io)
