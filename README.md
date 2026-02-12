# Runway

Runway is a financial resilience simulator built for mid-career professionals navigating income volatility, market uncertainty, and long-term independence planning.

View the current version here:
[Runway Financial Planner](https://runway-planner.vercel.app/)

*Note that Runway is a work in progress.*

Most retirement calculators assume:
- Steady employment
- Predictable annual savings
- Smooth market returns

Runway models a more realistic path.

---

## Why I Built This

At 51, working in software during rapid AI-driven industry change, I wanted to move beyond average-case retirement modeling.

This project started as a personal financial planning spreadsheet and evolved into a web application designed to:

- Model financial runway under conservative assumptions
- Visualize long-term compounding
- Explore the impact of varying savings rates
- Eventually simulate employment gaps and income compression scenarios

Runway treats income like burn rate and capital like runway.

---

## Current Features (v1)

- Adjustable annual income
- Adjustable annual savings contribution
- Configurable rate of return
- Configurable inflation rate
- Long-term projection of invested capital growth
- Visual representation of trajectory over time

---

## Planned Features

- Employment gap modeling
- Wage compression scenarios
- Monte Carlo simulations
- Sequence-of-returns stress testing
- Withdrawal phase modeling
- Multi-phase career modeling (active → partial → retired)

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- CSS Modules
- Charting library (TBD)

No Tailwind or UI framework — this project intentionally uses vanilla CSS for deeper layout and styling control.

---

## Architecture Approach

Runway is structured in layers:

1. **Financial Engine**
    - Pure deterministic functions
    - No framework dependencies
    - Fully testable in isolation

2. **State & Controls Layer**
    - React-based input handling
    - Memoized derived calculations

3. **Visualization Layer**
    - Data-driven chart rendering
    - Responsive layout

The goal is clarity, determinism, and explicit logic.

---

## Philosophy

This is not fear-based planning.

It is margin-based planning.

The goal is not early retirement at all costs.
The goal is optionality under uncertainty.

---

## Development

```bash
npm install
npm run dev
