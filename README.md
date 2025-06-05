# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## NextBite – MVP Plan

NextBite is a mobile application (built using Expo React Native) that helps users plan their meals and cooking schedule. The MVP will include the following key features and tasks:

### Tech Stack
- **Frontend & Runtime:** Expo (React Native) (with file-based routing via Expo Router)
- **Backend & Data Persistence:** Drizzle ORM (for data modeling and queries) and Turso (or Supabase) as the database.
- **Media Storage:** Cloudinary (for storing images and videos (e.g., recipe images, cooking videos)).

### MVP Tasks & User Flows

#### 1. Onboarding & User Profile
- **Onboarding Flow:**  
  - New users sign up (via email or social login) and are guided through an onboarding questionnaire.
  - Collect basic user info (e.g., name, email) and dietary preferences (e.g., diet type, food allergies, kitchen appliances).
  - Store this data (using Drizzle ORM) in Turso (or Supabase) so that it can be used later (for example, to filter recipes or generate grocery lists).
- **User Profile:**  
  - Allow users to view and update their profile (including dietary preferences) from a "Profile" or "Settings" screen.

#### 2. Recipe Database
- **Recipe Creation & Management:**  
  - Users can create a new recipe by entering a title, a description, cooking time (or "length of cooking"), a list of ingredients (with quantities and units), and optionally upload images (or videos) (using Cloudinary).
  - A "Recipe" screen (or "My Recipes" list) will display all saved recipes (with a thumbnail, title, and cooking time) and allow users to tap on a recipe to view its full details (ingredients, instructions, media).
- **Recipe Listing & Filtering:**  
  - (Optional MVP enhancement) Allow users to filter or search recipes (for example, by diet type or allergies) so that they can quickly find recipes that suit their needs.

#### 3. Cooking Events (Calendar) & Meal Planning
- **Calendar Integration:**  
  - Integrate a React Native calendar (for example, using a library like `react-native-calendars`) so that users can view a monthly (or weekly) calendar.
- **Cooking Event Creation:**  
  - On the calendar, users can tap a date (or a "+" button) to add a "cooking event" (or "meal plan").
  - In the event creation modal (or screen), the user selects (or searches) a recipe (from their recipe database) and assigns it to that date (and optionally a time).
- **Event Listing & Details:**  
  - The calendar (or a "Meal Plan" screen) will list all scheduled cooking events (with a brief summary (e.g., recipe title, cooking time) and, if tapped, show full details (ingredients, instructions, media) of the recipe.
- **Notifications (Optional MVP enhancement):**  
  - (If time permits) send a reminder (or push notification) to the user a few hours (or a day) before a scheduled cooking event.

#### 4. Grocery Planning & List Generation
- **Grocery Day Assignment:**  
  - On the calendar (or in a "Grocery" section), users can mark a day as "Grocery Day" (for example, by tapping a "Grocery" button on a date).
- **Grocery List Generation:**  
  - Once a grocery day is set (and cooking events (recipes) are assigned on the calendar), the app will aggregate the ingredients (from the recipes scheduled before the grocery day) and generate a consolidated grocery list.
- **Grocery List View:**  
  - A "Grocery" (or "Shopping") screen will display the generated grocery list (with ingredients, quantities, and units) so that users can check off (or "mark as bought") items as they shop.

#### 5. Deployment & Testing
- **Local Development:**  
  - Use `npx expo start` (or `npm run start`) to run the app locally (and test on an emulator or Expo Go).
- **Expo EAS (or CI/CD):**  
  - (Optional) Set up Expo EAS (or a CI/CD pipeline) so that (after testing) the app can be built (for Android and iOS) and deployed (for example, to the App Store or Google Play).
- **Testing & QA:**  
  - Conduct manual (and, if possible, automated) tests (for example, on the onboarding flow, recipe creation, calendar event creation, grocery list generation) to ensure that the MVP meets the requirements.

---

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
