export default function Conversation() {
  return (
    <>
      <div className="flex gap-2 items-center transition-colors hover:bg-emerald-500 rounded p-2 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full ">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">John Doe</p>
            <span className="text-xl">✨</span>
          </div>
        </div>
      </div>
      <div className="border-b border-slate-300 opacity-10 px-3" />
    </>
  );
}
