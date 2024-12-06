import { Routes } from '@angular/router';
import { TimelineComponent } from '../components/timeline/timeline.component';
import { HomeComponent } from '../components/home/home.component';
import { BaitulMukarramComponent } from '../components/baitul-mukarram/baitul-mukarram.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'timeline', component: TimelineComponent },
    { path: 'baitul-mukarram', component: BaitulMukarramComponent },

];
