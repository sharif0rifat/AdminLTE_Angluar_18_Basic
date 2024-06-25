import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityCenterComponent } from '../Utilities/activity-center/activity-center.component';

@Component({
  selector: 'app-chapter',
  standalone: true,
  imports: [ActivityCenterComponent],
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.scss'
})
export class ChapterComponent {
  private route=inject(ActivatedRoute);
  page='';
  Period='';
  
    /**
   * Initializes the component and retrieves the 'index' parameter from the route's snapshot.
   * Logs the value of the 'index' parameter to the console.
   *
   * @return {void} This function does not return anything.
   */
  ngOnInit(){
    const index = this.route.snapshot.paramMap.get('index');
    this.Period = this.route.snapshot.paramMap.get('period')??'';
    this.page=index??'';
    console.log(this.Period);
  }
}
