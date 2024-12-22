import { Component, HostListener } from '@angular/core';
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor() {
    document.title = 'Home'
  }


  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any){
    // console.log($event['Window']);
     console.log("scrolling",$event, window);


  }
}
