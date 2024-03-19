function MyMathPower(b, n) {
  let r = 1;
  if (n >= 0) {
    for (let i = 0; i < n; i++) {
      r *= b;
    }
    console.log(`The ${n}th power of ${b} equals ${r}`);
  } else {
    console.error("n should be greater than or equal to zero.");
  }
}

function MyMathPowerDefault1(b, n) {
  if (b === undefined || n === undefined) {
    console.log(
      "One or two arguments are unspecified. The default value is used"
    );
    MyMathPower(7, 3);
  } else {
    MyMathPower(b, n);
  }
}

function MyMathPowerDefault2(b = 2, n = 1) {
  MyMathPower(b, n);
}

function TestAllFunctions() {
  console.log("Test MyMathPowerDefault1 with both parameters set:");
  MyMathPowerDefault1(8, 4);

  console.log("Test MyMathPowerDefault1 with base parameter specified only:");
  MyMathPowerDefault1(3);

  console.log(
    "Test MyMathPowerDefault1 using only the specified power parameter:"
  );
  MyMathPowerDefault1(undefined, 7);

  console.log("Test MyMathPowerDefault1 with both parameters unspecified: ");
  MyMathPowerDefault1();

  console.log("Test MyMathPowerDefault2 with both parameters set:");
  MyMathPowerDefault2(2, 4);

  console.log("Test MyMathPowerDefault2 using only the base parameter:");
  MyMathPowerDefault2(8);

  console.log(
    "Test MyMathPowerDefault2 using only the specified power parameter:"
  );
  MyMathPowerDefault2(undefined, 3);

  console.log("Test MyMathPowerDefault2 with both parameters unspecified:");
  MyMathPowerDefault2();
}
TestAllFunctions()
