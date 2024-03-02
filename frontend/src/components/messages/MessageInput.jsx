import { IoIosSend } from "react-icons/io";
import { FaRegImages } from "react-icons/fa6";
import useSendMessage from "../../hooks/useSendMessage";
import { useRef, useState } from "react";
import usePreviewImg from "../../hooks/usePreviewImg";

export default function MessageInput() {
  const [message, setMessage] = useState("");
  const { handleImageChange, imgUrl, setImgUrl } = usePreviewImg();

  const { sendMessage, loading } = useSendMessage();
  const imagesModal = useRef();
  const imgInput = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!loading) {
      await sendMessage({ message, imgUrl });
      setMessage("");
      setImgUrl("");
    }
  };

  return (
    <>
      <form
        className="px-4 my-3 flex gap-1 items-center"
        onSubmit={handleSubmit}
      >
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
            {loading ? (
              <span className="loading loading-infinity loading-md bg-gray-400"></span>
            ) : (
              <IoIosSend />
            )}
          </button>
        </div>

        <div
          className="right-4 font-bold cursor-pointer text-xl text-emerald-700"
          onClick={() => {
            imgInput.current.click();
            imagesModal.current.showModal();
          }}
        >
          <input
            type="file"
            hidden
            ref={imgInput}
            onChange={(e) => handleImageChange(e)}
          />
          <FaRegImages />
        </div>
      </form>

      <dialog ref={imagesModal} className="modal">
        <div className="modal-box">
          {imgUrl ? (
            <img
              src={imgUrl}
              alt="user image"
              className=" w-96 mx-auto rounded-lg"
            />
          ) : (
            <p
              onClick={() => imgInput.current.click()}
              className="py-4 text-center cursor-pointer"
            >
              chose an image.
            </p>
          )}

          <p className="text-sm text-slate-500 py-4 text-center">
            Press ESC key or click outside to close
          </p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
