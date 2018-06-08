import { Component } from '@angular/core';
import { ImgClass } from './images/images.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images:ImgClass[];
  constructor(){
    this.images=[
      new ImgClass('assets/off.png',"ON"),
      new ImgClass('assets/off.png',"ON"),
      new ImgClass('assets/off.png',"ON"),
      new ImgClass('assets/off.png',"ON"),
      new ImgClass('assets/off.png',"ON"),
    ];

    }
  }

