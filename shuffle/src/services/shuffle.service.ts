import { Injectable, inject } from '@angular/core';
import { questions } from '../models/shuffle.model';
import { multiChoiceQuestions } from '../mock/questions';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShuffleService {


  constructor() { }

  getQuestions():Observable<questions[]>{
    return of (multiChoiceQuestions)
  }

  shuffleArray(arr: any[]){
    return arr.sort(()=> Math.random() - 0.5)
  }

}
