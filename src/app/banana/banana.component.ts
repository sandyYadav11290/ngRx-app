import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState, getMyBanana } from '../app.state'; 
import { GetNewBanana, PeelBanana, EatBanana } from './state';

@Component({
    selector: 'app-banana',
    templateUrl: './banana.component.html',
    styleUrls: ['./banana.component.css']
})
export class BananaComponent implements OnInit {

    title = 'My NgRx Banana App';
    banana$: Observable<any>;

    constructor(private store: Store<AppState>) {

    }

    ngOnInit() {
      this.newBanana();
      console.log(getMyBanana)
      this.banana$ = this.store.pipe(select(getMyBanana));
      this.banana$.subscribe(console.log)
    }

    newBanana() {
      this.store.dispatch(new GetNewBanana(null))
    }

    peelBanana() {
      this.store.dispatch(new PeelBanana(null))
    }

    eatBanana() {
      this.store.dispatch(new EatBanana(3))
    }

    timeHop() {

    }
}
