"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";

export default function DashboardPage() {
  const { getUserFromCookies, logoutUser } = useAuth();
  const [user, setUser] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });
  const router = useRouter();

  useEffect(() => {
    const userData = getUserFromCookies();
    if (!userData.email) {
      router.replace("/auth/login");
    } else {
      setUser({ name: userData.name, email: userData.email });
    }
    // eslint-disable-next-line
  }, []);

  const handleLogout = () => {
    logoutUser();
    router.push("/auth/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col">
      <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-indigo-700 flex-shrink-0">
          Dashboard
        </h1>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-lg flex-shrink-0">
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()}
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8 mt-8">
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">
            Welcome back, {user.name.split(" ")[0] || "User"}! 🎉
          </h2>
          <p className="text-gray-700 mb-6">
            This is your dashboard. Here you can see your profile info and
            manage your account.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-indigo-50 rounded-lg p-4 flex flex-col items-center">
              <span className="text-3xl mb-2">📧</span>
              <span className="text-gray-600 text-sm">Email</span>
              <span className="font-medium text-indigo-700">{user.email}</span>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4 flex flex-col items-center">
              <span className="text-3xl mb-2">🧑‍💼</span>
              <span className="text-gray-600 text-sm">Full Name</span>
              <span className="font-medium text-indigo-700">{user.name}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={handleLogout}
            className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-semibold transition"
          >
            Logout
          </button>
        </div>
      </main>
      <footer className="py-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} NextJS Cookie Auth Dashboard
      </footer>
    </div>
  );
}
