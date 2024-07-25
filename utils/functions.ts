// bcryptjs
import { compare, hash } from "bcryptjs";

export const hashPassword = (password: string) => {
  const hashedPassword = hash(password, 12);
  return hashedPassword;
};

export const verifyPassword = async (
  password: string,
  hashedPassword: string
) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};
