import React, { useState } from "react";

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div style={{ justifyItems: "center" }}>
      <h3>{greeting}! </h3>
      <p>¡Gracias por tu visita!</p>
      <button
        onClick={() => setGreeting(randomMessage())}
        style={{
          backgroundColor: "#17202A",
          color: "#fff",
          width: "100%",
          height: "4rem",
          borderRadius: "2rem",
          fontSize: "1.6rem",
          alignSelf: "center"
        }}
      >
        Nuevo saludo
      </button>
    </div>
  );
}
