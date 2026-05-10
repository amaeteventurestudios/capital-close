"use client";

const PREFIX = "raise90_";

export const storage = {
  get: (key: string): string | null => {
    try {
      return localStorage.getItem(PREFIX + key);
    } catch {
      return null;
    }
  },
  set: (key: string, value: string): void => {
    try {
      localStorage.setItem(PREFIX + key, value);
    } catch {}
  },
  getJSON: <T>(key: string, fallback: T): T => {
    try {
      const val = localStorage.getItem(PREFIX + key);
      return val ? JSON.parse(val) : fallback;
    } catch {
      return fallback;
    }
  },
  setJSON: (key: string, value: unknown): void => {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
    } catch {}
  },
  remove: (key: string): void => {
    try {
      localStorage.removeItem(PREFIX + key);
    } catch {}
  },
};
