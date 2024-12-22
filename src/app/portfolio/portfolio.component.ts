import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  isHidden:boolean = true;
  modelImage: string = ''

  imagesUrl = ['assets/poert1.png','assets/port2.png','assets/port3.png', 'assets/poert1.png','assets/port2.png','assets/port3.png']




  closeSlide(target: EventTarget | null, img: HTMLImageElement ) {
    if( target == img ) {
      return;
    } else {
      this.isHidden = true
    }

  }
}
