import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-nombre-list',
  templateUrl: './nombre-list.component.html',
  styleUrls: ['./nombre-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NombreListComponent {
  @Input() nombres: number[] = [];
  add(x: number) {
    this.nombres.push(x);
  }
  carre(x: number) {
    const result = x * x;
    console.log(x, result);
    return result;
  }
}
