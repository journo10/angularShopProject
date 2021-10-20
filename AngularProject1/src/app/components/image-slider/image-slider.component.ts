import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ImageSliderService } from 'src/app/services/image-slider.service';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent implements OnInit {
  //ng-image-slider
  imageObject: Product[] = [];
  constructor(
    private imageSliderService: ImageSliderService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setImageObject();
  }

  //Slider Image
  setImageObject() {
    this.imageSliderService.getImages().subscribe((data: any) => {
      this.imageObject = data;
      console.log(data);
    });
  }
}

//NOT => RESİMLER GELMEDİ.


