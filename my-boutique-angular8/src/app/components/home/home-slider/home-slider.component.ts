import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit {
  public imagesUrl;
  constructor() { }

  ngOnInit() {
    this.imagesUrl = ['https://cdn.pixabay.com/photo/2015/10/12/15/18/clothing-store-984396_960_720.jpg',
     'https://cdn.pixabay.com/photo/2016/03/09/09/22/store-1245758_960_720.jpg'
     , 'https://cdn.pixabay.com/photo/2015/09/21/14/24/supermarket-949913_960_720.jpg'];
  

  }

}
