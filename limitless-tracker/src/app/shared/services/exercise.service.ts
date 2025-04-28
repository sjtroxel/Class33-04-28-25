import { inject, Injectable, signal } from '@angular/core';
import { Exercise } from '../models/exercise.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})


export class ExerciseService {
  exercises = signal<Exercise[]>([

  ]);
  private apiUrl = 'http://localhost:4200/data/exercises.json'
  private httpClient = inject(HttpClient)

  getExercises() {
    console.log("Getting exercises...");

    return this.httpClient.get<Exercise[]>(this.apiUrl).pipe(
      tap((exercises) => this.exercises.set(exercises)))
  }

  addExercise(n: string, d: number) {
   this.exercises.update(e => [...e, {name: n, duration: d}])
  //  this.httpClient.get<Exercise[]>(this.apiUrl).pipe(
  //   tap((exercises) => this.exercises.set(exercises))
  //  )
  }



  removeExercise(n: string) {
    this.exercises.update(l => l.filter(e => e.name !== n))
  }
}
