import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p>App</p>
      <button style={{ width: "3rem" }} onClick={() => setShow(!show)}>
        Show
      </button>
      {show && <p style={{ color: "red" }}>Show me baby!</p>}
    </div>
  );
};

export default App;
