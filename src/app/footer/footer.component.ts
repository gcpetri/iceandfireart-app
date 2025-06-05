import { Component, input } from '@angular/core';
import { TitlePage } from '../types/titlePage';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEtsy, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faEnvelope = faEnvelope;
  iconMap = {
    'Etsy': faEtsy,
    'Instagram': faInstagram,
    'TikTok': faTiktok
  }

  config = input.required<TitlePage>();
}
