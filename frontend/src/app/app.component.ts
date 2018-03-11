import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    question='';
    answers:any[];
    answer='';

    addAnswer(){
        console.log("ans: ",this.answer);
        this.answers.push(this.answer);
        console.log("answers: ",this.answers);
        this.answer = '';
    }
}
