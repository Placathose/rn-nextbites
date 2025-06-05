import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

// Helper function to create array columns
const arrayColumn = (name: string) => text(name, { mode: 'json' }).$type<string[]>();

// Users table
export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name').notNull(),
  dietaryPreferences: arrayColumn('dietary_preferences').default([]),
  allergies: arrayColumn('allergies').default([]),
  kitchenAppliances: arrayColumn('kitchen_appliances').default([]),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

// Types for recipe data
type Ingredient = {
  name: string;
  amount: number;
  unit: string;
  notes?: string;
};

type Instruction = {
  step: number;
  instruction: string;
  time?: string;
};

// Recipes table
export const recipes = sqliteTable('recipes', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id),
  title: text('title').notNull(),
  description: text('description'),
  cookingTime: integer('cooking_time'), // in minutes
  ingredients: text('ingredients', { mode: 'json' })
    .notNull()
    .$type<Ingredient[]>(),
  instructions: text('instructions', { mode: 'json' })
    .notNull()
    .$type<Instruction[]>(),
  imageUrl: text('image_url'),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

// Cooking events table
export const cookingEvents = sqliteTable('cooking_events', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id),
  recipeId: text('recipe_id')
    .notNull()
    .references(() => recipes.id),
  scheduledFor: integer('scheduled_for', { mode: 'timestamp' }).notNull(),
  status: text('status', { enum: ['scheduled', 'completed', 'cancelled'] })
    .notNull()
    .default('scheduled'),
  notes: text('notes'),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
}); 