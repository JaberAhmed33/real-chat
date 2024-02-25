import GenderCheckbox from './GenderCheckbox';

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-emerald-700 font-bold ms-3">Real Chat</span>
        </h1>
        <form>
          <div className="p-2">
            <label className="label p-2">
              <span className="text-sm text-opacity-75 text-gray-300">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div className="p-2">
            <label className="label p-2">
              <span className="text-sm text-opacity-75 text-gray-300">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="sasuke-san"
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
              placeholder="Enter Password"
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
              type="Confirm password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderCheckbox />

          <a
            to="#"
            className="text-sm text-gray-300 hover:text-emerald-300 mt-2 inline-block p-2"
          >
            Already have an account!
          </a>

          <button className="btn btn-block bg-emerald-700 hover:bg-emerald-900 hover:border-emerald-700 border-emerald-900 text-white btn-sm mt-2 p-2 h-10">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
