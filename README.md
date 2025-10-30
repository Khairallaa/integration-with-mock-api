# Integration-with-api---sesion-6: Updated with Custom Mock API

This repository is an updated version of the original project, now connected to a custom-built mock API to fulfill the request of switching the data source.

## 🚀 Mock API Integration Details

The application originally fetched data from the Studio Ghibli API (`https://ghibliapi.vercel.app/films`). This version has been updated to use a custom, static JSON endpoint that mimics the required data structure.

### 🔗 New API Endpoint

The application now fetches its film data from the following public JSON endpoint:

\`\`\`
https://files.manuscdn.com/user_upload_by_module/session_file/310419663032203558/zXiuvWTcBXQQoKln.json
\`\`\`

This endpoint serves a list of three fictional films with a data structure that perfectly matches the `Film` type defined in `src/api/data.tsx`.

### 🛠️ Code Changes

The primary change was made in `src/api/data.tsx`:

1.  **API URL Update:** The `ghibliapi.vercel.app` URL was replaced with the new mock API URL in the `getFilms` function.
2.  **`getFilmById` Refactor:** Since the static JSON file does not support dynamic routing (e.g., `/films/id`), the `getFilmById` function was refactored to first fetch all films and then use a local array filter to find the film by its `id`.

## Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

### Step 1: Start Metro

To start the Metro dev server, run the following command from the root of your React Native project:

\`\`\`sh
# Using npm
npm start

# OR using Yarn
yarn start
\`\`\`

### Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

#### Android

\`\`\`sh
# Using npm
npm run android

# OR using Yarn
yarn android
\`\`\`

#### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

\`\`\`sh
bundle install
bundle exec pod install
# Then run the app
npm run ios
# OR using Yarn
yarn ios
\`\`\`

If everything is set up correctly, you should see your new app running and displaying the mock film data.
\`\`\`
