import { Component } from '@angular/core';
import { ActivityCenterComponent } from '../Utilities/activity-center/activity-center.component';

@Component({
  selector: 'app-report-center',
  standalone: true,
  imports: [ActivityCenterComponent],
  templateUrl: './report-center.component.html',
  styleUrl: './report-center.component.scss'
})
export class ReportCenterComponent {

}
