import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useConversation from "../../hooks/useConversation";
import { validationSearchInputs } from "../../../utils/validationInputs";
import useStore from "../../store/useStore";
import toast from "react-hot-toast";

export default function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useStore();
  const { conversations } = useConversation();

  const handlerSubmit = (e) => {
    e.preventDefault();

    const validInputs = validationSearchInputs({
      search,
    });

    if (!validInputs) return;

    const conversation = conversations.find((e) =>
      e.username.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    }else{
      toast.error("NO user found!")
    }
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handlerSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-circle bg-emerald-700 hover:bg-emerald-900 text-white h-10"
      >
        <IoSearch className="w-6 h-6" />
      </button>
    </form>
  );
}
