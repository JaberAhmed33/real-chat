import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

export const SocketContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () => {
    return useContext(SocketContext);
  };
  

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onLineUsers, seOnLineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socket = io("https://real-chat-kh45.onrender.com", {
        query: {
          userId: authUser._id,
        },
      });

      setSocket(socket);
      socket.on("getOnlineUsers", (users) => {
        seOnLineUsers(users);
      });
      return () => {
        socket.close();
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onLineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
