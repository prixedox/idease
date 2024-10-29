import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CheatsheetComponent } from './pages/cheatsheet/cheatsheet.component';
import { TestPageComponent } from './pages/test-page/test-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cheatsheet', component: CheatsheetComponent },
  { path: 'test', component: TestPageComponent },
];
