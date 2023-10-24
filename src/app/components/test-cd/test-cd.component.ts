import { Component } from '@angular/core';

@Component({
  selector: 'app-test-cd',
  templateUrl: './test-cd.component.html',
  styleUrls: ['./test-cd.component.css']
})
export class TestCDComponent {
  user = {name: 'aymen', age: 41};
  nombres = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
  
  message = 'init value';
}
