import { Component, Input, OnInit } from '@angular/core';

/**
 * Progress ring component. Displays a progress bar in a circle format.
 * @example 
 * <progress-ring [currentQuestion]="30" [totalNumberOfQuestions]="60"></progress-ring>
 */
@Component({
  selector: 'progress-ring',
  templateUrl: './progress-ring.component.html',
  styles: [`
    #progress-circle {
      border-radius: 50%;
      width: 100%;
      aspect-ratio: 1/1;

    }

    .progress-circle-container__current {
        position: absolute;
        margin: 0;
        font-size: 3rem;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);

      }

    .progress-circle-container {
      position: relative;
      max-width: 125px; 
      width: auto;
      
    }

    @media only screen and (max-width: 1400px)  {

      #progress-circle {
      border-radius: 50%;
      width: 100%;
      aspect-ratio: 1/1;
      

    }

    .progress-circle-container__current {
        position: absolute;
        margin: 0;
        font-size: 2rem;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);

      }

    .progress-circle-container {
      position: relative;
      max-width: 125px; 
    }

    }

    @media only screen and (max-width: 990px)  {

      #progress-circle {  
      border-radius: 50%;
      width: 100%;
      aspect-ratio: 1/1;


      }

      .progress-circle-container__current {
        position: absolute;
        margin: 0;
        font-size: 2rem;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);

      }

      .progress-circle-container {
      position: relative;
      max-width: 125px; 
      width: 50px;
      }

    }

    


  `]
})
export class ProgressRingComponent implements OnInit {

  CIRCLE_DEGREES = 360;

  _currentQuestion = 0;

  @Input()
  totalNumberOfQuestions = 60;

  @Input()
  set currentQuestion(value: number) {
    this._currentQuestion = value > this.totalNumberOfQuestions ? this.totalNumberOfQuestions : value;
    this.drawRing();
  }

  constructor() { }

  ngOnInit(): void {
    this.drawRing();
  }

  drawRing() {
    const currentFillProgress = this._currentQuestion * this.CIRCLE_DEGREES / this.totalNumberOfQuestions;
    const style = document.createElement('style');
    style.id = "progress-circle-style"
    style.textContent = `
      #progress-circle {
        background: radial-gradient(white 65%, transparent 65%), conic-gradient(transparent 0deg ${currentFillProgress}deg, gainsboro ${currentFillProgress}deg 360deg), conic-gradient(#be1e2d 0deg, #be1e2d 360deg);
      }
    `;
    const DOMCircleStyle = document.querySelector('#progress-circle-style');
    if (DOMCircleStyle) {
      DOMCircleStyle.textContent = style.textContent;
    } else {
      document.head.appendChild(style);
    }
  }
}
