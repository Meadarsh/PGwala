import React, { useEffect } from "react";
import MessageCard from "./messageCard";

const Message = () => {
  const [message, setMessage] = React.useState([]);
  useEffect(() => {
    async function Fetch() {
      const result = await fetch(`${import.meta.env.VITE_BASE_URL}/message`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (result.ok) {
        const data = await result.json();
        setMessage(data);
      }
    }
    Fetch();
  }, []);
  return (
    <div className="flex lg:p-4 p-2 overflow-y-auto flex-wrap gap-4">
      {message?.map((mes,index) => (
        <MessageCard key={index} message={mes} />
      ))}
    </div>
  );
};

export default Message;
