# Exercises 4.3-4.7: D3 bar chart

COS30045 Data Visualisation, Bui Dang Minh (105716425)

Live page: https://buidangminh23.github.io/cos30045-ex4-bar-chart/

A horizontal bar chart of the number of TV models per brand, built with D3 v7 step by step: responsive SVG container (4.3), loading `data/tvBrandCount.csv` with `d3.csv` (4.4), binding data to rectangles (4.5), `d3.scaleLinear` and `d3.scaleBand` (4.6) and labels in `g` groups (4.7). Each exercise step is a separate commit.

## Files

- `index.html` - the page
- `css/style.css` - page styles and `.responsive-svg-container`
- `js/main.js` - the D3 code
- `data/tvBrandCount.csv` - brand counts exported from the 2026 TV Data KNIME workflow

## Run locally

Open the folder in VS Code and start Live Server, or run `python -m http.server` in the folder and open http://localhost:8000. The page must be served by a server so that `d3.csv` can load the data files.

## Generative AI Reflection

- **Tool:** Claude Opus 5.5 (Anthropic), used through Claude Code in October 2026.
- **What I used it for:** drafting the HTML, CSS and D3 code by following the steps of the exercise brief, and explaining what each D3 method does.
- **What I changed or checked:** I ran the page with a local server, checked the data in the browser console and the elements in the DOM, and checked that the code only uses techniques from the Week 4 to Week 6 lectures and exercises.
- **What I learned:** how a data join creates one element per row and how scales keep the chart inside the viewBox whatever the data values are.
- **Limitations:** the AI wrote code faster than I could read it, so I went through every file line by line before the demonstration. Each commit that contains generated code says so in the commit message, and each code file starts with a comment marking the GenAI use.
