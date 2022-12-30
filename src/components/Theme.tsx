import { useState } from "react";
import "./Theme.css";

interface Click {
  isClicked: boolean;
}

export function Theme() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <body style={{ background: isClicked ? "#000000" : "white" }}>
      <div className="container1">
        <div className="container2">
          <h1 className="teste">Teste Cor</h1>
          <input type="checkbox" onClick={() => setIsClicked(true)} />
        </div>
      </div>
    </body>
  );
}
