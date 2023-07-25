import { useAuth } from "@/context/authcontext";

export default function Header() {
  const { logout, user } = useAuth();

  return (
    <header className="p-4 flex justify-around bg-green-500 text-gray-50">
      <h1 className="text-5xl text-black ">Cookie Stand Admin</h1>
      <div className="flex gap-5">
        <div className="bg-gray-300 pt-3 px-3 rounded-lg">
          <p className="text-black">{user.username}</p>
        </div>
        <button className="bg-green-600 p-3 rounded-lg" onClick={logout}>
          sign out
        </button>
      </div>
    </header>
  );
}
