import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-cdfils',
  templateUrl: './test-cdfils.component.html',
  styleUrls: ['./test-cdfils.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestCDFilsComponent {
  @Input() user: {name: string, age: number} = {name: '', age: 0};
  @Input() message = '';
}
