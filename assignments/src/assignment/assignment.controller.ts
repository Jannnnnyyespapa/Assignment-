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

}
