import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);

  const remove = (id) => {
    setNumbers((prevNumbers) => prevNumbers.filter((_, index) => index !== id));
  };

  return (
    <div>
      <p>App</p>
      <button style={{ width: "3rem" }} onClick={() => setShow(!show)}>
        Show
      </button>
      {show && <p style={{ color: "red" }}>Show me baby!</p>}
      {numbers.map((n, index) => (
        <div key={index}>
          <li>{n}</li>
          <button onClick={() => remove(index)}>remove</button>
        </div>
      ))}
    </div>
  );
};

export default App;
