import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { useRecipes } from '../../../hooks/useRecipe';

export default function RecipesScreen() {
  const { recipes, isLoading } = useRecipes();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading recipes...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/dashboard/(recipes)/${item.id}`} asChild>
            <Pressable style={styles.recipeCard}>
              <Text style={styles.recipeTitle}>{item.name}</Text>
              <Text style={styles.recipeMeta}>{item.cookingTime} • {item.difficulty}</Text>
            </Pressable>
          </Link>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listContent: {
    gap: 12,
    paddingBottom: 20,
  },
  recipeCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    elevation: 2,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  recipeMeta: {
    color: '#666',
    fontSize: 14,
  },
});