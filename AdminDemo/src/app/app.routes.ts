import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ChapterComponent } from './areas/StrumMain/chapter/chapter.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component:HomeComponent },
    { path: 'Chapter/:id', component:ChapterComponent },
];
