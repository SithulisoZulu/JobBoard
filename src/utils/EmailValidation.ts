import { z } from 'zod';

const emailSchema = z.string().email();

export const isEmailValid = (email: string): boolean => {
  try {
    emailSchema.parse(email);
    return true;
  } catch (error) {
    return false;
  }
};