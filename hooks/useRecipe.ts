import { useEffect, useState } from 'react';
import { Recipe } from '../types';

export function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      setRecipes([
        { id: '1', name: 'Pasta Carbonara', cookingTime: '20 mins', difficulty: 'Easy' },
        { id: '2', name: 'Vegetable Stir Fry', cookingTime: '15 mins', difficulty: 'Easy' },
        // ...more recipes
      ]);
      setIsLoading(false);
    };

    fetchRecipes();
  }, []);

  return { recipes, isLoading };
}