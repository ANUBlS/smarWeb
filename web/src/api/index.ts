/*
 * Active Oracle gateway.  Mock by default; switch to the real API with
 *   VITE_API_MODE=http  VITE_API_URL=https://<host>/api
 */
import type { OracleApi } from './types';
import { MockOracleApi } from './mock';
import { HttpOracleApi } from './http';

const mode = (import.meta.env.VITE_API_MODE as string | undefined) ?? 'mock';
export const api: OracleApi = mode === 'http'
  ? new HttpOracleApi((import.meta.env.VITE_API_URL as string | undefined) ?? '/api')
  : new MockOracleApi();

export * from './types';
