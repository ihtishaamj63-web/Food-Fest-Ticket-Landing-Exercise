# Food Fest Ticket Landing Page

A Vue.js landing page for the Cape Town Food Fest 2026 event. The application displays three ticket tiers (Bronze, Silver, and Gold) with pricing, benefits, and interactive features such as favoriting tickets and sorting options.

## Project Overview

The Cape Town Food Fest is an annual outdoor food festival featuring chefs, street food vendors, and live music. This landing page allows users to explore ticket options before purchasing.

Users can:

- View Bronze, Silver, and Gold ticket tiers
- Compare prices and benefits
- Mark tickets as favorites
- Sort tickets by price or featured status
- Browse the site on desktop, tablet, and mobile devices

The Silver tier is highlighted as the featured ticket option.

## Features

- Three ticket tiers with unique color schemes
- Featured Silver tier with badge styling
- Favorite/unfavorite tickets
- Sort by lowest price
- Sort by highest price
- Show featured tickets first
- Responsive design
- Reusable Vue components

## Screenshot

![Food Fest Ticket Landing Page](./screenshot.png)

## Tech Stack

- Vue 3
- Vuex
- Vue Router
- Vite
- CSS

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/food-fest-ticket-landing-page.git
```

Navigate to the project folder:

```bash
cd food-fest-ticket-landing-page
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open your browser and visit:

http://localhost:5173

## Build for Production

```bash
npm run build
```

The production files will be generated in the `dist` folder.

## Project Structure

```text
src/
├── components/
│   ├── TicketCard.vue
│   └── TicketList.vue
├── data/
│   └── tickets.js
├── stores/
│   └── index.js
├── router/
│   └── index.js
├── assets/
│   └── main.css
├── App.vue
└── main.js
```

## Usage

- Browse the available ticket tiers
- Click the star icon to add or remove favorites
- Use the sorting options to organize tickets
- Compare ticket prices and benefits
- View the featured Silver ticket tier

## Author

Created as a Vue 3 and Vuex practice project.
