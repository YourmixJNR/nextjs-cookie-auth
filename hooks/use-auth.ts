import { parseCookies, setCookie } from "nookies";

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

  // get user info from cookies
  function getUserFromCookies() {
    const cookies = parseCookies();
    return {
      name: cookies.user_name || "",
      email: cookies.user_email || "",
      password: cookies.user_password || "",
    };
  }

  // login: check if email and password match what's in cookies
  function loginUser(email: string, password: string) {
    const user = getUserFromCookies();
    return user.email === email && user.password === password;
  }

  return { registerUser, getUserFromCookies, loginUser };
}
