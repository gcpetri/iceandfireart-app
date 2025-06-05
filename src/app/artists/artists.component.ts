import { Component, computed, input, OnDestroy, OnInit, signal } from '@angular/core';
import { Artist } from '../types/artist';

@Component({
  selector: 'app-artists',
  standalone: true,
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit, OnDestroy {
  artists = input.required<Artist[]>();

  claraImagePaths = computed(() => this.artists().find(artist => artist.name === 'Clara')?.imagePaths || []);
  claraImageIdx = signal<number>(0);
  gregImagePaths = computed(() => this.artists().find(artist => artist.name === 'Gregory')?.imagePaths || []);
  gregImageIdx = signal<number>(0);

  imageIndexes: number[] = [];
  intervalId: any;

  ngOnInit() {
    const _artists = this.artists();
    if (_artists) {
      // Initialize imageIndexes for each artist
      this.imageIndexes = _artists.map(() => 0);

      // Start interval to rotate images
      this.intervalId = setInterval(() => {
        this.gregImageIdx.set((this.gregImageIdx() + 1) % this.gregImagePaths().length);
        this.claraImageIdx.set((this.claraImageIdx() + 1) % this.claraImagePaths().length);
      }, 5000);
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  getGregImage() {
    return this.gregImagePaths()[this.gregImageIdx()];
  }

  getClaraImage() {
    return this.claraImagePaths()[this.claraImageIdx()];
  }
}
