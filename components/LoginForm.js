import { useAuth } from "@/context/authcontext";

export const LoginForm = () => {
  const { login } = useAuth();

  function handleLogIn(event) {
    event.preventDefault();

    login(event.target.username.value, event.target.password.value);
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="bg-green-200 p-10 rounded-xl border-green-600 border-4  w-3/6"
        onSubmit={handleLogIn}
      >
        <div className="flex flex-col px-10 items-center">
          <label className="text-xl font-medium ">USER NAME</label>
          <input
            className="w-full p-5 mt-5 "
            name="username"
            placeholder="User Name"
          />
        </div>
        <div className="flex flex-col p-10 items-center">
          <label className="text-xl font-medium">PASSWORD</label>
          <input
            className="w-full p-5 mt-5"
            name="password"
            type="password"
            placeholder="password"
          />
        </div>
        <div className="flex flex-col px-10 items-center">
          <button type="submit" className="bg-green-600 w-full p-5 rounded-xl">
            SIGN IN
          </button>
        </div>
      </form>
    </div>
  );
};
