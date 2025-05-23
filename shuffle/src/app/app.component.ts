import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShuffleService } from '../services/shuffle.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shuffle';

  shuffleService = inject(ShuffleService);
  questions$ = this.shuffleService.getQuestions();

  ngOnInit(){
    this.questions$.subscribe(data => {
      this.shuffleService.shuffleArray(data);
      data.forEach(item => {
        item.options = this.shuffleService.shuffleArray(item.options);
      })
    })
  }
}
