import { Routes } from '@angular/router';
import { TimelineComponent } from '../components/timeline/timeline.component';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'timeline', component: TimelineComponent },

];
