import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/home/topic/topic.module#TopicModule'
  },
  {
    path: ':id',
    loadChildren: 'app/home/thread/thread.module#ThreadModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule {
}
