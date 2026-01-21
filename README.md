# Movie Review App

A simple React Native mobile app built with Expo Router for reviewing movies.

## Features

- 📱 Browse all movies
- ⭐ View movie details (budget, collection, OTT platforms)
- 📝 Read and write reviews
- 🏆 Top 10 movies of the month and year
- ⏰ Most anticipated movies
- 🎨 Beautiful dark theme UI

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [VS Code](https://code.visualstudio.com/)
- [Expo Go](https://expo.dev/client) app on your mobile device (iOS or Android)

## Installation & Setup

### 1. Extract the ZIP file
Extract the movie-review-app.zip file to your desired location.

### 2. Open in VS Code
Open VS Code and go to File > Open Folder, then select the `movie-review-app` folder.

### 3. Install Dependencies
Open the integrated terminal in VS Code (View > Terminal or Ctrl+`) and run:

```bash
npm install
```

### 4. Start the Development Server
Once dependencies are installed, start the Expo development server:

```bash
npm start
```

or

```bash
npx expo start
```

### 5. Run on Your Device

After the development server starts, you'll see a QR code in the terminal.

**For iOS:**
- Install "Expo Go" from the App Store
- Open the Camera app and scan the QR code
- Tap the notification to open in Expo Go

**For Android:**
- Install "Expo Go" from the Play Store
- Open Expo Go and tap "Scan QR code"
- Scan the QR code shown in the terminal

**Alternative (Using Emulator/Simulator):**
- Press `a` in the terminal to open Android emulator
- Press `i` in the terminal to open iOS simulator (Mac only)

## Project Structure

```
movie-review-app/
├── app/                    # Expo Router screens
│   ├── _layout.tsx        # Tab navigation layout
│   ├── index.tsx          # Home screen (all movies)
│   ├── top-movies.tsx     # Top 10 movies
│   ├── anticipated.tsx    # Most anticipated movies
│   └── movie/
│       └── [id].tsx       # Movie detail screen (dynamic route)
├── components/            # Reusable components
│   ├── MovieCard.tsx     # Movie card component
│   └── ReviewCard.tsx    # Review card component
├── data/                 # Mock data
│   └── mockData.ts      # Movies and reviews data
├── types/               # TypeScript types
│   └── index.ts        # Type definitions
├── app.json           # Expo configuration
├── package.json       # Dependencies
└── tsconfig.json     # TypeScript configuration
```

## Features Guide

### Browse Movies
- Open the app to see all available movies
- Tap on any movie card to view details

### View Movie Details
- See comprehensive information including budget, box office collection, and OTT platforms
- Read existing reviews
- Add your own review

### Top 10 Movies
- Navigate to the "Top 10" tab
- Toggle between "Month" and "Year" to see rankings
- Movies are ranked by their ratings

### Most Anticipated
- Navigate to the "Anticipated" tab
- See movies sorted by anticipation percentage

## Customization

### Adding More Movies
Edit `data/mockData.ts` and add new movie objects to the `movies` array.

### Changing Theme Colors
The app uses a dark theme with these main colors:
- Primary: `#e94560` (Pink/Red)
- Background: `#1a1a2e` (Dark Blue)
- Secondary Background: `#16213e`
- Accent: `#0f3460`

You can change these colors in the StyleSheet sections of each component.

## Troubleshooting

### Dependencies not installing
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Expo Go not connecting
- Make sure your phone and computer are on the same WiFi network
- Try using tunnel mode: `npx expo start --tunnel`

### Metro bundler issues
```bash
# Clear Metro bundler cache
npx expo start -c
```

## Next Steps

To expand this app, you could:
1. Add a real backend API (Firebase, Supabase, etc.)
2. Implement user authentication
3. Add search and filter functionality
4. Create a favorites/watchlist feature
5. Add movie trailers
6. Implement social sharing

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [React Native Documentation](https://reactnative.dev/)

## License

This is a learning project - feel free to use and modify as needed!
