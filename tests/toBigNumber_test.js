import {
  toBN,
} from "../mod.js";
import {
  BigNumber,
  testing,
} from "../deps.js";

var tests = [
  { value: 1, expected: "1" },
  { value: "1", expected: "1" },
  { value: "0x1", expected: "1" },
  { value: "0x01", expected: "1" },
  { value: 15, expected: "15" },
  { value: "15", expected: "15" },
  { value: "0xf", expected: "15" },
  { value: "0x0f", expected: "15" },
  { value: new BigNumber("f", 16), expected: "15" },
  { value: -1, expected: "-1" },
  { value: "-1", expected: "-1" },
  { value: "-0x1", expected: "-1" },
  { value: "-0x01", expected: "-1" },
  { value: -15, expected: "-15" },
  { value: "-15", expected: "-15" },
  { value: "-0xf", expected: "-15" },
  { value: "-0x0f", expected: "-15" },
  {
    value: "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
    expected:
      "115792089237316195423570985008687907853269984665640564039457584007913129639935",
  },
  {
    value: "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd",
    expected:
      "115792089237316195423570985008687907853269984665640564039457584007913129639933",
  },
  {
    value:
      "-0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
    expected:
      "-115792089237316195423570985008687907853269984665640564039457584007913129639935",
  },
  {
    value:
      "-0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd",
    expected:
      "-115792089237316195423570985008687907853269984665640564039457584007913129639933",
  },
  { value: 0, expected: "0" },
  { value: "0", expected: "0" },
  { value: "0x0", expected: "0" },
  { value: -0, expected: "0" },
  { value: "-0", expected: "0" },
  { value: "-0x0", expected: "0" },
  { value: new BigNumber(0), expected: "0" },
];

Deno.test({
  name: "toBN",
  fn() {
    tests.forEach(({ expected, value }) => {
      testing.assertEquals(toBN(value).toString(10), expected);
    });
  },
});
