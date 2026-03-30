export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number | null {
  if (b == 0) return null;
  return a / b;
}

export function factorial(n: number): number | null {
  if (n < 0 || !Number.isInteger(n)) return null;
  if (n <= 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

export function power(base: type, exponent: number): number {
  return base ** exponent;
}

export function average(numbers: Array<number>) {
  if (numbers.length < 1) {
    return null;
  }
  let sum = 0;
  numbers.forEach((num) => {
    sum += num;
  });
  return sum / numbers.length;
}

export function clamp(value: number, min: number, max: number) {
  if (value < min) {
    return min;
  } else if (value > max) {
    return max;
  } else {
    return value;
  }
}

export function quadratic(a: number, b: number, c: number) {
  const discrim = b * b - 4 * a * c;
  if (discrim < 0) {
    return null;
  } else if (discrim == 0) {
    return [-b / (2 * a)];
  } else {
    const left = -b;
    const right = discrim ** 0.5;
    const denom = 2 * a;
    return [(left + right) / denom, (left - right) / denom];
  }
}
