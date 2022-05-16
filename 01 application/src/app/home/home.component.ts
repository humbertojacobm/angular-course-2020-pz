import { Component
  , OnInit
  , AfterViewInit
} from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  //comment: afterViewInit: nos dice cuando los elementos hijos ya fueron renderizados.

  mySwiper: Swiper;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.mySwiper = new Swiper('.swiper-container');
  }

}
