# 🎟️ Food Fest Ticket Landing Page

A modern, interactive Vue.js landing page for the **Cape Town Food Fest 2026** event. This single-page application showcases ticket tiers (**Bronze, Silver, and Gold**) with pricing, benefits, and interactive features including favorites, sorting, and color-coded tier differentiation.

---

## 📖 Project Overview

The **Cape Town Food Fest** is an annual outdoor food festival that brings together renowned chefs, street food vendors, and live musicians.

This landing page showcases ticket tiers with distinct **Bronze**, **Silver**, and **Gold** color schemes, allowing users to explore pricing and benefits before purchasing.

The **Silver Tier** is featured with special styling and a badge to highlight its value. Users can favorite ticket tiers, sort tickets by price or featured status, and interact with a modern, responsive interface built using **Vue 3**, **Vuex**, and **Vue Router**.

---

## ✨ Features

- Three ticket tiers with color differentiation:
  - Bronze (`#cd7f32`)
  - Silver (`#c0c0c0`)
  - Gold (`#ffd700`)

- Featured Silver tier with special badge and styling
- Interactive favorite functionality with star toggle
- Sort tickets by:
  - Price (ascending)
  - Price (descending)
  - Featured first

- Responsive design for desktop, tablet, and mobile devices
- Event header with festival branding and statistics
- Reusable Vue component architecture
- Modern user interface with smooth interactions

---

## 📸 Screenshot

![Food Fest Ticket Landing Page](./screenshot.png)

---

## 🛠️ Tech Stack

- **Vue 3**
- **Vuex** (State Management)
- **Vue Router**
- **Vite**
- **Vanilla CSS** (Scoped Component Styling)

---

## 🚀 Installation & Run Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/food-fest-ticket-landing-page.git
```

### 2. Navigate to the Project Directory

```bash
cd food-fest-ticket-landing-page
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

---

## 📦 Build for Production

```bash
npm run build
```

The optimized production files will be generated in the `dist` directory.

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── TicketCard.vue    # Individual ticket display with interactions
│   └── TicketList.vue    # Grid layout with sorting controls
├── data/
│   └── tickets.js        # Ticket data (prices, benefits, colors)
├── stores/
│   └── index.js          # Vuex store with state, mutations, actions, getters
├── router/
│   └── index.js          # Vue Router configuration
├── assets/
│   └── main.css          # Global styles
├── App.vue               # Main application with header and footer
└── main.js               # Application entry point
```

---

## 📋 Usage

1. Browse the available ticket tiers.
2. Compare pricing and included benefits.
3. Click the ⭐ icon to add or remove a ticket tier from your favorites.
4. Use the sorting controls to:
   - View featured tickets first
   - Sort by lowest price
   - Sort by highest price

5. Explore the responsive layout across different screen sizes.
6. Identify the featured **Silver Tier** through its highlighted styling and badge.

---

## 🎯 Learning Objectives

This project demonstrates:

- Vue 3 component-based development
- State management with Vuex
- Routing with Vue Router
- Dynamic rendering using Vue directives
- Event handling and user interactions
- Computed properties and state-driven UI updates
- Reusable component design
- Responsive web design principles
- Modern frontend development with Vite

```

```