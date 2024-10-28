import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssignmentControllerModule } from './assignment-controller/assignment-controller.module';
import { AssignmentController } from './assignment/assignment.controller';
import { AssignmentsService } from './assignments/assignments.service';

@Module({
  imports: [AssignmentControllerModule],
  controllers: [AppController, AssignmentController],
  providers: [AppService, AssignmentsService],
})
export class AppModule {}
