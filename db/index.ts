import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema/index';

// Initialize the Turso client
const client = createClient({
  url: process.env.DATABASE_URL || 'file:local.db',
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

// Create the Drizzle ORM instance
export const db = drizzle(client, { schema });

// Export types
export type Database = typeof db;
export type Schema = typeof schema; 