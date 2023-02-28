function bitwiseOperations() {
  const number = 21; // 10101
  const inputs = [
    {
      number,
      bitIndexToChange: 3,
      get bitMask() {
        // 1 << i it is like 2^i. 2^i is always only single '1' among '0' in <2> base. 2 = 10, 4 = 100, 8 = 1000, ...
        return 1 << this.bitIndexToChange;
      },
      get result() {
        return this.number | this.bitMask;
      },
      description: "Set some bit to '1'. OR + mask, 0 becomes 1",
    },
    {
      number,
      bitIndexToChange: 2,
      get bitMask() {
        return 1 << this.bitIndexToChange;
      },
      get result() {
        return this.number | this.bitMask;
      },
      description: "Set some bit to '1'. OR + mask. 1 remains 1",
    },
    {
      number,
      bitIndexToChange: 3,
      get bitMask() {
        // ~(1 << i) -- negative left shift. You can see it something like '-101' in console. Actually, it reverts all the bits
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT The presence of the most significant bit is used to express negative integers
        return ~(1 << this.bitIndexToChange);
      },
      get result() {
        return this.number & this.bitMask;
      },
      description:
        "Set some bit to '0'. AND + mask (negative left shift). 0 remains 0",
    },
    {
      number,
      bitIndexToChange: 2,
      get bitMask() {
        return ~(1 << this.bitIndexToChange);
      },
      get result() {
        return this.number & this.bitMask;
      },
      description:
        "Set some bit to '0'. AND + mask (negative left shift). 1 becomes 0",
    },
    {
      number,
      bitIndexToChange: 2,
      get bitMask() {
        return 1 << this.bitIndexToChange;
      },
      get result() {
        return this.number ^ this.bitMask;
      },
      description: "Toggle bit value. XOR + mask. 1 becomes 0",
    },
    {
      number,
      bitIndexToChange: 3,
      get bitMask() {
        return 1 << this.bitIndexToChange;
      },
      get result() {
        return this.number ^ this.bitMask;
      },
      description: "Toggle bit value. XOR + mask. 0 becomes 1",
    },
    {
      number,
      bitIndexToChange: 3,
      get bitMask() {
        return 1 << this.bitIndexToChange;
      },
      get result() {
        return (this.number & this.bitMask) !== 0;
      },
      description: "Check if bit equals 1.",
    },
    {
      number,
      bitIndexToChange: 2,
      get bitMask() {
        return 1 << this.bitIndexToChange;
      },
      get result() {
        return (this.number & this.bitMask) !== 0;
      },
      description: "Check if bit equals 1.",
    },
    {
      number,
      bitIndexToChange: 3,
      get bitMask() {
        return 1 << this.bitIndexToChange;
      },
      get result() {
        return (this.number & this.bitMask) === 0;
      },
      description: "Check if bit equals 0.",
    },
    {
      number,
      bitIndexToChange: 2,
      get bitMask() {
        return 1 << this.bitIndexToChange;
      },
      get result() {
        return (this.number & this.bitMask) === 0;
      },
      description: "Check if bit equals 0.",
    },
  ];

  inputs.forEach((entry) => {
    console.dir({
      number: entry.number,
      bitToChange: entry.bitIndexToChange,
      bitMask: entry.bitMask,
      result: entry.result,
      "bitMask<2>": printBaseTwoOrBoolean(entry.bitMask),
      "number<2> ": printBaseTwoOrBoolean(entry.number),
      "result<2> ": printBaseTwoOrBoolean(entry.result),
      description: entry.description,
    });
  });
}

function printBaseTwoOrBoolean(value, size = 8) {
  if (value === true || value === false) {
    return value;
  }
  const res = value.toString(2);
  return new Array(size - res.length).fill(0).join("") + res;
}

bitwiseOperations();
