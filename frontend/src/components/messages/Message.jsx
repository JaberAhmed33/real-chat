export default function Message() {
  return (
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-bubble text-white bg-emerald-700">
          It was said that you would, destroy the Sith, not join them.
        </div>
        <div className="chat-footer text-white opacity-50 text-xs flex gap-1 items-center">1:07</div>
      </div>
  );
}
