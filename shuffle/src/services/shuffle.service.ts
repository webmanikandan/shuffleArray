import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { questions } from '../models/shuffle.model';
import { multiChoiceQuestions } from '../mock/questions';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShuffleService {

  protected http = inject(HttpClient);

  constructor() { }

  getQuestions():Observable<questions[]>{
    return of (multiChoiceQuestions)
  }

  shuffleArray(arr: any[]){
    return arr.sort(()=> Math.random() - 0.5)
  }

}
