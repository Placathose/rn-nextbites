import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

// Mock data - replace with your actual data fetching
type Recipe = {
  title: string;
  cookTime: string;
  difficulty: string;
  ingredients: string[];
  instructions: string;
};

const mockRecipes:  Record<string, Recipe>  = {
  '1': {
    title: 'Pasta Carbonara',
    cookTime: '20 mins',
    difficulty: 'Easy',
    ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan', 'Black pepper'],
    instructions: '1. Cook pasta\n2. Fry pancetta\n3. Mix eggs with cheese\n4. Combine everything'
  },
  '2': {
    title: 'Vegetable Stir Fry',
    cookTime: '15 mins',
    difficulty: 'Medium',
    ingredients: ['Broccoli', 'Carrots', 'Bell peppers', 'Soy sauce', 'Garlic'],
    instructions: '1. Chop vegetables\n2. Heat oil\n3. Stir fry veggies\n4. Add sauce'
  }
};


export default function RecipeDetail() {
  const { id } = useLocalSearchParams();
  const recipeId = Array.isArray(id) ? id[0] : id; // Handle array case
  const recipe = mockRecipes[recipeId]; // No more error

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text>Recipe not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{recipe.title}</Text>
      
      <View style={styles.metaContainer}>
        <Text style={styles.metaText}>⏱️ {recipe.cookTime}</Text>
        <Text style={styles.metaText}>🧑‍🍳 {recipe.difficulty}</Text>
      </View>

      <Text style={styles.sectionTitle}>Ingredients</Text>
      {recipe.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.ingredient}>• {ingredient}</Text>
      ))}

      <Text style={styles.sectionTitle}>Instructions</Text>
      <Text style={styles.instructions}>{recipe.instructions}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  metaContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 20,
  },
  metaText: {
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
    color: '#333',
  },
  ingredient: {
    marginLeft: 8,
    marginBottom: 4,
  },
  instructions: {
    lineHeight: 24,
  },
});