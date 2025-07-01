# Pokédex 

A dynamic, responsive, and cache-optimized Pokédex application built with React. Explore detailed Pokémon data, view types, stats, and moves, all fetched from the PokéAPI with local storage caching for fast repeat visits.

## Live Demo

🔗[Live Site URL](https://pokedex-liard-one.vercel.app/)

## Features

✅ **Search by ID** – Load Pokémon data by Pokédex number  
✅ **Move Details Modal** – Click on a move to view its description  
✅ **Local Caching** – Reduces API calls and speeds up UX  
✅ **Type Badges** – Displays styled Pokémon type cards  
✅ **Responsive Design** – Mobile-friendly layout  
✅ **Image Gallery** – View official and sprite images  
✅ **Stats Overview** – See base stats in a clean layout  

## Tech Stack

- **Frontend**: React
- **Styling**: Fanta CSS (custom framework)
- **Persistence**: Browser Local Storage
- **API**: PokéAPI

## Installation & Setup

1. **Clone the repository**:
   ```sh
   git clone https://github.com/iamarshalrejith/Pokedex.git
   cd Pokedex
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Start the development server**:
   ```sh
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173/`

## Project Structure

```
Pokedex/
│── public/
│   └── pokemon/              # Pokémon images
│
│── src/
│   ├── components/
│   │   ├── Header.jsx        # Top navigation and title
│   │   ├── Modal.jsx         # Reusable modal for move info
│   │   ├── PokeCard.jsx      # Main Pokémon detail card
│   │   ├── SideNav.jsx       # Side navigation panel
│   │   └── TypeCard.jsx      # Visual Pokémon type tags
│   ├── utils/
│   │   └── index.js          # Utility functions (e.g., ID formatting)
│   ├── App.jsx               # Main app logic and routing
│   └── main.jsx              # React DOM entry point
│── index.css
│── fanta.css                 # Custom CSS framework
│── package.json
└── README.md
```

## Core Logic Overview

- **State Management**: `useState` + `useEffect` hooks for async and cached data
- **Caching**: Pokémon and move data saved in `localStorage` to optimize performance
- **Image Handling**: Uses sprite data from the API and large static images from `/public/pokemon`
- **Component Composition**: Each UI section is modular for scalability and reuse

## 🚀 Deployment

This project can be deployed on any static hosting service:

- **Vercel**
- **Netlify**
- **GitHub Pages**

## 📜 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
