import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { countNode } from './reducers/count/count.reducer';
import { clear, decrease, increase } from './reducers/count/count.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public count$: Observable<number>;

  constructor(private store$: Store<{ count: number }>) {
    this.count$ = store$.select(countNode);
  }

  increase(): void {
    this.store$.dispatch(increase());
  }

  decrease(): void {
    this.store$.dispatch(decrease());
  }

  clear(): void {
    this.store$.dispatch(clear());
  }
}
