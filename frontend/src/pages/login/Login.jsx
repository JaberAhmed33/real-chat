export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-emerald-700 font-bold ms-3">Real Chat</span>
        </h1>

        <form>
          <div className="p-2">
            <label className="label p-2">
              <span className="text-sm text-opacity-75 text-gray-300">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div className="p-2">
            <label className="label p-2">
              <span className="text-sm text-opacity-75 text-gray-300">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <a
            to="#"
            className="text-sm text-gray-300 hover:text-emerald-300 mt-2 inline-block p-2"
          >
            {"Don't"} have an account?
          </a>

          <button className="btn btn-block bg-emerald-700 hover:bg-emerald-900 hover:border-emerald-700 border-emerald-900 text-white btn-sm mt-2 p-2 h-10">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
