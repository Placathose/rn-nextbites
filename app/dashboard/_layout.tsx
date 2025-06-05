import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';


// import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen
        name="(home)/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(recipe)/index"
        options={{
          title: 'Recipes',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="book" size={24} color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="(nutritionist)/index"
        options={{
          title: 'Nutrition',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="apple" size={24} color={color} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="(groceries)/index"
        options={{
          title: 'Groceries',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="shopping-bag" size={24} color={color} />
          ),
        }}
      />
        <Tabs.Screen
          name="(profile)/index"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={24} color={color} />
            ),
          }}
        />
    </Tabs>
  );
}