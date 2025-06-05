import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export function SearchBar({ placeholder = 'Search...' }) {
  const [query, setQuery] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={query}
        onChangeText={setQuery}
        returnKeyType="search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 8,
    marginVertical: 8,
  },
  input: {
    fontSize: 16,
  },
});