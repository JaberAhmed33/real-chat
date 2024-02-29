import { IoIosSend } from "react-icons/io";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";

export default function MessageInput() {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center text-gray-400 pe-3"
        >
          
          {
            loading ? <span className="loading loading-infinity loading-md bg-gray-400"></span> : <IoIosSend />
          }
        </button>
      </div>
    </form>
  );
}
