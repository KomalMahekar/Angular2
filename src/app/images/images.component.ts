import { Component, OnInit,Input } from '@angular/core';
import {ImgClass} from './images.model';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  @Input()  img:ImgClass;

  constructor() { }

  ngOnInit() {
  }
  toggleUrl():boolean{
    this.img.toggleUrl();
    return false;
  }
}
