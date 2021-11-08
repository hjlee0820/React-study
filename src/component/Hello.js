import { useState } from "react";
import UserName from "./UserName";

// export default function Hello(props) {
//   console.log(props);
//   const [name, setName] = useState("Mike");
//   const [age, setAge] = useState(props.age);

//   function btnClick() {
//     setName(name === "Mike" ? "Jane" : "Mike");
//     setAge(age + 1);
//   }

//   return (
//     <div>
//       <h1>State</h1>
//       <h2>{name}({age})</h2>
//       <button onClick={btnClick}>Change</button>
//     </div>
//   );
// }

export default function Hello({age}) {
  const [name, setName] = useState("Mike");
  const msg = age > 19 ? '성인입니다.' : '미성년자입니다.';

  function btnClick() {
    setName(name === "Mike" ? "Jane" : "Mike");
  }

  return (
    <div>
      <h1>State</h1>
      <h2 id="name">
        {name}({age}) : {msg}
      </h2>
      <UserName name={name}/>
      <button
        onClick={btnClick}
      >Change</button>
    </div>
  );
}