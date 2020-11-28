import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  curr_user: {id: number, name: string };
  paramsSubscription: Subscription;
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.curr_user = {
    //   id: this.activeRoute.snapshot.params['id'],
    //   name: this.activeRoute.snapshot.params['name']
    // }

    // above one approach is not working when you try to load route from current route

    // Use reactive approad to avoid this issue

    this.paramsSubscription = this.activeRoute.params
      .subscribe((params: Params) => {
        this.curr_user = {
          id: params['id'],
          name: params['name']
        }
      })
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
