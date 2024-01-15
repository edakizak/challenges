import {add, substact, multiply, divide} from "./index.js";

//add

test("returns 5", () => {
    const result = add(2, 3)
    expect(result).toBe(5)
});

test("returns a negative value if the greater argument is negative", () => {
    const result = add(2, -3)
    expect(result).toBeLessThan(0)
});

test("returns 10", () => {
    const result = add(15, 5)
    expect(result).toBe(10)
});

//substract

test("returns a value close to 0.3", () => {
    const result = add(0.1, 0.2)
    expect(result).toBe(0)
}
test("")