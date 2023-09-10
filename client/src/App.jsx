import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Menggunakan Axios untuk melakukan permintaan GET ke server
    axios
      .get("https://vercel-deploy-server-mu.vercel.app", {
        withCredentials: true,
      })
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:4000/test", { credentials: "include" })
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <h1 className="text-2xl">{message}</h1>
    </div>
  );
};

export default App;
