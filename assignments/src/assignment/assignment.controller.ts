import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('assignments')
export class AssignmentController {

  @Get('fibonacci/:n')
  getFibonacci(@Param('n', ParseIntPipe) n: number): number[] {
    return this.generateFibonacci(n);
  }

  private generateFibonacci(n: number): number[] {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n); // Limit to first n elements
  }
//prime-number

@Get('prime/:number')
isPrime(@Param('number', ParseIntPipe) number: number): { Prime: boolean } {
  const Prime = this.checkPrime(number);
  return {Prime }; // Only return isPrime property
}

private checkPrime(num: number): boolean {
  if (num <= 1) return false; // 0 and 1 are not prime numbers
  if (num <= 3) return true; // 2 and 3 are prime numbers

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}


//factiorial calculator
@Get('factorial/:f')
getFactorial(@Param('f', ParseIntPipe) f: number): { factorial: number } {
  return { factorial: this.calculateFactorial(f) };
}

private calculateFactorial(num: number): number {
  if (num < 0) return -1; // Return -1 for negative numbers (undefined for factorial)
  if (num === 0 || num === 1) return 1;

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}


}
