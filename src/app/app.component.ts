import { Component, Inject } from '@angular/core';
import { MainService } from './mainService';
import { productServiceIT } from './injection-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DependecyInjectionThird';
  constructor(@Inject(productServiceIT) private mainService:MainService){
        console.log(mainService.getProducts());
  }
}
