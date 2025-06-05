import { Stack } from 'expo-router';
import { View } from 'react-native';
import { RecipesHeader } from '../../../components/RecipeHeader';

export default function RecipeLayout() {
  return (
    <View style={{ flex: 1 }}>
      {/* Shared header for all recipe screens */}
      <RecipesHeader />
      
      {/* Stack navigator for recipe screens */}
      <Stack
        screenOptions={{
          headerShown: false, // We're using our custom header
          animation: 'fade',
          contentStyle: { backgroundColor: '#f7f7f7' },
        }}
      >
        {/* No need to declare <Stack.Screen> here if using file-system routing */}
      </Stack>
    </View>
  );
}