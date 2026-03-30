import { describe, it, expect } from 'vitest';
import {
  add,
  subtract,
  multiply,
  divide,
  factorial,
  power,
  average,
  clamp,
  quadratic,
} from './math';

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
  it('handles negative numbers', () => {
    expect(add(-1, -4)).toBe(-5);
  });
});

describe('subtract', () => {
  it('subtracts two numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });
});

describe('multiply', () => {
  it('multiplies two numbers', () => {
    expect(multiply(3, 7)).toBe(21);
  });
  it('returns zero when multiplied with zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });
});

describe('divide', () => {
  it('divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });
  it('returns null for division by zero', () => {
    expect(divide(10, 0)).toBeNull();
  });
});

describe('factorial', () => {
  it('computes factorial of 5', () => {
    expect(factorial(5)).toBe(120);
  });
  it('returns 1 for factorial of 0', () => {
    expect(factorial(0)).toBe(1);
  });
  it('returns null for negative input', () => {
    expect(factorial(-3)).toBeNull();
  });
});

describe('power', () => {
  it('computes 2 to the power of 3', () => {
    expect(power(2, 3)).toBe(8);
  });
  it('returns 1 for a power of 0', () => {
    expect(power(-1, 0)).toBe(1);
  });
});

describe('average', () => {
  it('computes the average of three numbers', () => {
    expect(average([1, 3, 8])).toBe(4);
  });
  it('returns null for an empty array', () => {
    expect(average([])).toBeNull();
  });
});

describe('clamp', () => {
  it('returns max if value is large', () => {
    expect(clamp(100, 0, 50)).toBe(50);
  });
  it('returns min if value is small', () => {
    expect(clamp(-20, 0, 50)).toBe(0);
  });
});

describe('quadratic', () => {
  it('computes single value when discriminate is 0', () => {
    const roots = quadratic(9, 0, 0);
    expect(roots.length).toBe(1);
    expect(roots[0] === 0).toBeTruthy();
  });
  it('computes both roots when discriminate is positive', () => {
    const roots = quadratic(2, 5, 2);
    expect(roots.length).toBe(2);
    expect(roots[0]).toBe(-0.5);
    expect(roots[1]).toBe(-2);
  });
  it('returns null for no real roots', () => {
    expect(quadratic(9, 0, 1)).toBeNull();
  });
});
