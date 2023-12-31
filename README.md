  <img alt="Groww Stonks - stocks/etfs broking website" src="/public/HomePage.png">
    <h1 align="center">Alpha Stonks - stocks/etfs broking website</h1>

<p align="center">
  Shop for your favourite Stocks/etfs
</p>

<p align="center">
  <a href="https://twitter.com/anchit1909" target="_blank">
    <img src="https://img.shields.io/twitter/follow/anchit1909?style=flat&label=anchit1909&logo=twitter&color=0bf&logoColor=fff" alt="Anchit Sinha Twitter follower count" />
  </a>
  <a href="https://github.com/Anchit1909/groww-stonks" target="_blank">
    <img src="https://img.shields.io/github/stars/Anchit1909/groww-stonks?label=Anchit1909%2FGrowwstonks" alt="Groww Stonks repo star count" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#how-it-works"><strong>How It Works</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#screenshots"><strong>Screenshots</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>
<br/>

## Introduction

AlphaStonks is an online platform for stock market data. It shows top-performing and underperforming stocks, offers stock details and financials, and provides Line, Candlestick, and Bar charts. It includes a quick search feature for your favorite stocks.

## Features

- Top 20 gainers and losers displayed on the Home page.
- Company Details Page.
- Visualization of the Stock performance using Charts.
- Financials of the stock displayed on the company page.
- Search functionality to search for the stocks.
- Filter feature to filter the search among Stock, ETF, Mutual Fund.
- Suggested Stocks in the search bar.

## Tech Stack

- Javascript
- [NextJS](https://nextjs.org/)
- [Alphavantage API](https://www.alphavantage.co/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn ui](https://ui.shadcn.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Google Charts](https://www.react-google-charts.com/) (For data visualization)

## Screenshots

### Home Page

<img alt="Home Page" src="/public/HomePage.png">

### Company Details Page

<img alt="Company Details Page" src="/public/CompanyDetails.png">

### Line Chart

<img alt="Line Chart" src="/public/LineChart.png">

### Area Chart

<img alt="Area Chart" src="/public/AreaChart.png">

### Search Functionality

<img alt="Search Functionality" src="/public/SearchHistory.png">

## Running Locally

### Cloning the repository to the local machine.

```bash
git clone
```

### Creating an account on Alphavantage to get an API key.

1. Get an API key from the API Keys section.

### Storing API key in .env file.

Create a file in root directory of project named **.env.local**. And store your API key in it.

### Installing the dependencies.

```bash
npm install
```

### Running the application.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
npm run dev
```

## Author

- Anchit Sinha ([@anchit1909](https://twitter.com/anchit1909))
