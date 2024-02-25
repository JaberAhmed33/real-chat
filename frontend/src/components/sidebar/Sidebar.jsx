import SearchInput from "./SearchInput";
import Conversations from './Conversations';
import Logout from "./Logout";

export default function Sidebar() {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="border-b border-slate-300 my-4 opacity-20 px-3" />
      <Conversations />
      <Logout />
    </div>
  )
}
