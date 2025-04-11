import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifService } from '../../services/gifs.service';
import { ListComponent } from '../../components/list/list.component';
@Component({
  selector: 'app-gif-history',
  imports: [ListComponent],
  templateUrl: './gif-history.component.html',
})
export default class GifHistoryComponent {
  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query']))
  );
  gifService = inject(GifService);
  gifsByKey = computed(() => this.gifService.getHistoryGifs(this.query()));
}
