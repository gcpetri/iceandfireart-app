import { Component, input } from '@angular/core';
import { Commissions } from '../types/commissions';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClock, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-commissions',
  standalone: true,
  templateUrl: './commissions.component.html',
  styleUrls: ['./commissions.component.scss'],
  imports: [
    FontAwesomeModule
  ],
})
export class CommissionsComponent {
  faClock = faClock;
  faInfoCircle = faInfoCircle;
  commissions = input.required<Commissions>();
}
