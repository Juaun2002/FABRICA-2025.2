const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

/**
 * Generates a random password of a given size.
 * @param size The desired length of the password.
 * @returns The generated password.
 */
export function generatePassword(size: number): string {
  let password = "";
  for (let i = 0, n = charset.length; i < size; i++) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;
}