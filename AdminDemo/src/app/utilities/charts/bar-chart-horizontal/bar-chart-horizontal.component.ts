import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
@Component({
  selector: 'app-bar-chart-horizontal',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './bar-chart-horizontal.component.html',
  styleUrl: './bar-chart-horizontal.component.scss'
})
export class BarChartHorizontalComponent {
  chart3 = new Chart({
    chart: {
        type: 'bar'
    },
    title: {
        text: ''
    },
    xAxis: {
      labels: {
        enabled: false
      },
        categories: ['0', '1', '2', '3', '4', '5','6','7','8','9','10']
    },
    yAxis: {
        min: 0,
        gridLineWidth:0,
        title: {
            text: ''
        },
        labels: {
          enabled: false
        }
    },
    
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        type: 'column',
        name: 'Cristiano Ronaldo',
        data: [100,200,500,800,1000,1200,1400,1600,1800,2000,2200]
    }]
});
}
