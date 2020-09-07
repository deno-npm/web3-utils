import {
  isBN,
} from "../mod.js";
import {
  BN as BigNumber,
  testing,
} from "../deps.js";

var tests = [
  { value: function () {}, is: false },
  { value: new Function(), is: false },
  { value: "function", is: false },
  { value: {}, is: false },
  { value: new String("hello"), is: false },
  { value: new BigNumber(0), is: true },
  { value: 132, is: false },
  { value: "0x12", is: false },
];

Deno.test({
  name: "isBigNumber",
  fn() {
    tests.forEach(({ is, value }) => {
      testing.assertEquals(isBN(value), is);
    });
  },
});
