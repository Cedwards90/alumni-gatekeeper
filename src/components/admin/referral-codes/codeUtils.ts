
// Generate a random referral code
export const generateRandomCode = (): string => {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
  return /^\S+@\S+\.\S+$/.test(email);
};
