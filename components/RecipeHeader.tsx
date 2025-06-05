import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from '@/components/SearchBar';

export function RecipesHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Recipes</Text>
      <SearchBar placeholder="Search recipes..." />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});