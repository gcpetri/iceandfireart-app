import { Component, signal } from '@angular/core';
import { CollectionsComponent } from './collections/collections.component';
import { HttpClient } from '@angular/common/http';
import { Config } from './types/config';
import { TitlePageComponent } from './title-page/title-page.component';
import { ArtistsComponent } from './artists/artists.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TitlePageComponent,
    CollectionsComponent,
    ArtistsComponent,
    CommissionsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iceandfireart-app';
  config = signal<Config | null>(null);
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/assets/config.json').subscribe(data => {
      this.config.set(data as Config);
    });
  }
}