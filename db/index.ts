import { drizzle as drizzleNeon } from 'drizzle-orm/neon-http';
import { drizzle as drizzlePostgres } from 'drizzle-orm/node-postgres';
import { neon } from '@neondatabase/serverless';

import * as schema from './schema';

/**
 * Initialize the database connector only when a DATABASE_URL is provided.
 * If no connection string is available (for example during local `next build`
 * when env vars are not set), we export `null` so caller code can handle
 * the missing DB gracefully instead of crashing the build.
 */
let _db: any = null;

if (process.env.DATABASE_URL) {
    try {
        _db = process.env.VERCEL
            ? drizzleNeon({
                  client: neon(process.env.DATABASE_URL),
                  schema,
                  casing: 'snake_case',
              })
            : drizzlePostgres(process.env.DATABASE_URL, {
                  schema,
                  casing: 'snake_case',
              });
    } catch (e) {
        // If initialization fails, surface a helpful message but do not throw
        // during module evaluation so that build/data-collection can continue.
        // Callers should check for `db == null` and handle accordingly.
        // Log the original error for debugging.
        // eslint-disable-next-line no-console
        console.error('Failed to initialize DB client:', e);
        _db = null;
    }
} else {
    // eslint-disable-next-line no-console
    console.warn('No DATABASE_URL found — DB client not initialized.');
}

export const db = _db;
