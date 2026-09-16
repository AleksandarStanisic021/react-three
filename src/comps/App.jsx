import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <p>App</p>
      <button onClick={() => setShow(!show)}>Show</button>
      {show && <p style={{ color: "red" }}>Show me baby</p>}
    </>
  );
};

export default App;
