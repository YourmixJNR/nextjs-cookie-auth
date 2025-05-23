import { setCookie } from "nookies";

type RegisterData = {
  name: string;
  email: string;
  password: string;
};

export function useAuth() {
  // register user and store info in cookies
  function registerUser({ name, email, password }: RegisterData) {
    setCookie(null, "user_email", email, { path: "/" });
    setCookie(null, "user_name", name, { path: "/" });
    setCookie(null, "user_password", password, { path: "/" });
  }

  return { registerUser };
}
