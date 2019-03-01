import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, query, animateChild, group } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('HomePage => UserPage', [
        style({position: 'relative'}),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ right: '-100%'})
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('500ms ease-out', style({ right: '100%' }))
          ]),
          query(':enter', [
            animate('500ms ease-out', style({ right: '0%' }))
          ])
        ]),
        query(':enter', animateChild())
      ]),
      transition('* => HomePage', [
        style({position: 'relative'}),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%'})
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('500ms ease-out', style({ left: '100%' }))
          ]),
          query(':enter', [
            animate('500ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild())
      ])
    ])
  ]
})
export class AppComponent {
  title = 'mobile-test-app';

  
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
