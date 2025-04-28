import { Component, inject, OnInit } from '@angular/core';
import { ExerciseService } from '../../../../shared/services/exercise.service';
import { ExerciseFormComponent } from "../exercise-form/exercise-form.component";
import { ExerciseItemComponent } from "../exercise-item/exercise-item.component";


@Component({
  selector: 'app-exercise-list',
  imports: [ExerciseFormComponent, ExerciseItemComponent],
  standalone: true,
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent implements OnInit {


private exerciseService = inject(ExerciseService)

exercises = this.exerciseService.exercises;

ngOnInit(): void {
 this.exerciseService.getExercises().subscribe();
}


}
