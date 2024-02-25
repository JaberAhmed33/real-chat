import { IoSearch } from "react-icons/io5";

export default function SearchInput() {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
      />
      <button
        type="submit"
        className="btn btn-circle bg-emerald-700 hover:bg-emerald-900 text-white h-10"
      >
        <IoSearch className="w-6 h-6"/>
      </button>
    </form>
  );
}
