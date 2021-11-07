import { useState } from "react";

export default function Hello(props) {
  console.log(props);
  const [name, setName] = useState("Mike");
  const [age, setAge] = useState(props.age);

  function btnClick() {
    setName(name === "Mike" ? "Jane" : "Mike");
    setAge(age + 1);
  }

  return (
    <div>
      <h1>State</h1>
      <h2>{name}({age})</h2>
      <button onClick={btnClick}>Change</button>
    </div>
  );
}