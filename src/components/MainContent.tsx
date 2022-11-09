import { useState } from "react";

export default function FizzBuzz(): JSX.Element {
  const [nums, setNum] = useState<number[]>([1]);

  const handleAddNumber = () => {
    setNum([...nums, nums[nums.length - 1] + 1]);
  };

  const FizzBuzzArr: (number | string)[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 !== 0 && nums[i] % 5 !== 0) {
      FizzBuzzArr.push(nums[i]);
    } else if (nums[i] % 3 === 0 && nums[i] % 5 !== 0) {
      FizzBuzzArr.push("Fizz");
    } else if (nums[i] % 3 !== 0 && nums[i] % 5 === 0) {
      FizzBuzzArr.push("Buzz");
    } else {
      FizzBuzzArr.push("FizzBuzz");
    }
  }
  return (
    <body>
      <h1 id="Title">FizzBuzz App</h1>
      <hr />

      <div id="maincontent">
        <p>
          Fizz Buzzed Numbers:
          {FizzBuzzArr.map((num, i) => {
            return <li key={i}>{num}</li>;
          })}
        </p>
        <hr />
        <button onClick={handleAddNumber}>Add Number</button>
      </div>
    </body>
  );
}
