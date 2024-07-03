import { Component } from '@angular/core';
import { ActivityCenterComponent } from '../Utilities/activity-center/activity-center.component';
import { GenericModalComponent } from '../../../utilities/generic-modal/generic-modal.component';

@Component({
  selector: 'app-report-center',
  standalone: true,
  imports: [ActivityCenterComponent,GenericModalComponent],
  templateUrl: './report-center.component.html',
  styleUrl: './report-center.component.scss'
})
export class ReportCenterComponent {

}
