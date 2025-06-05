import { Component, input } from '@angular/core';
import { TitlePage } from '../types/titlePage';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEtsy, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-title-page',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent {
  faEnvelope = faEnvelope;
  iconMap = {
    'Etsy': faEtsy,
    'Instagram': faInstagram,
    'TikTok': faTiktok
  }

  config = input.required<TitlePage>();
}
