import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapter',
  standalone: true,
  imports: [],
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.scss'
})
export class ChapterComponent {
  private route=inject(ActivatedRoute);

    /**
   * Initializes the component and retrieves the 'index' parameter from the route's snapshot.
   * Logs the value of the 'index' parameter to the console.
   *
   * @return {void} This function does not return anything.
   */
  ngOnInit(){
    const index = this.route.snapshot.paramMap.get('id');
    console.log(index);
  }
}
