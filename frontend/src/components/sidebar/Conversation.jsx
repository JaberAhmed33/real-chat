import { useRef } from "react";
import useStore from "../../store/useStore.js"

export default function Conversation({conversation, emoji, lastIndex}) {
  const {selectedConversation, setSelectedConversation} = useStore()
  const selectedEle = useRef(null);

  const isSelected = selectedConversation?._id === conversation._id;  

  if (isSelected) {
    selectedEle.current.scrollIntoView({ behavior: "smooth" });
  }
  
  return (
    <>
      <div className={`flex gap-2 items-center transition-colors ${isSelected && "bg-emerald-500"} hover:bg-emerald-500 rounded p-2 cursor-pointer`}
        onClick={() => setSelectedConversation(conversation)}
        ref={selectedEle}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full ">
            <img
              src={conversation.profilePic}
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.username}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {
        !lastIndex && <div className="border-b border-slate-300 opacity-10 px-3" />
      }
    </>
  );
}
