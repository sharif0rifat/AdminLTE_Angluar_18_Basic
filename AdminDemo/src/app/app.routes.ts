import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ChapterComponent } from './areas/StrumMain/chapter/chapter.component';
import { ReportCenterComponent } from './areas/StrumMain/report-center/report-center.component';
import { CampaignComponent } from './areas/StrumMA/campaign/campaign.component';
import { PersonaSummeryComponent } from './areas/StrumMain/persona/persona-summery/persona-summery.component';
import { PersonaBuilderComponent } from './areas/StrumMain/persona/persona-builder/persona-builder.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component:HomeComponent },
    { path: 'Chapter/:index/:period', component:ChapterComponent },
    { path: 'ReportsCenter', component:ReportCenterComponent },
    { path: 'Campaigns', component:CampaignComponent },
    { path: 'Persona/PersonaSummary', component:PersonaSummeryComponent },
    { path: 'Persona/Builder', component:PersonaBuilderComponent },
    { path: 'Marketing/CampaignList', loadComponent: () => import('./areas/StrumMain/marketing/campaign/campaign.component')
    .then(mod => mod.CampaignComponent) },
    { path: 'Marketing/ManageCampaignCosts', loadComponent: () => import('./areas/StrumMain/marketing/cost-management/cost-management.component')
    .then(mod => mod.CostManagementComponent) },
];
