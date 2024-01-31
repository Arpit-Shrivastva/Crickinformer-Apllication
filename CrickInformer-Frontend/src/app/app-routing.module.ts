import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LiveComponent } from './Pages/live/live.component';
import { HistoryComponent } from './Pages/history/history.component';
import { PointTableComponent } from './Pages/point-table/point-table.component';

const routes: Routes = [
  {path:"", redirectTo:'/home', pathMatch:"full", title:"Home | Crickinformer"},
  { path: "home", component: HomeComponent, title: "Home | Crickinformer" },
  { path: "live", component: LiveComponent, title: "Live | Crickinformer" },
  { path: "history", component: HistoryComponent, title: "History | Crickinformer" },
  { path: "point-table", component: PointTableComponent, title: "T20-2023 Point Table | Crickinformer" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
