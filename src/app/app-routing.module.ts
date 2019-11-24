import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { Page1Component } from './components/subpages/page1/page1.component';
import { Page2Component } from './components/subpages/page2/page2.component';
import { Page3Component } from './components/subpages/page3/page3.component';
import { Page4Component } from './components/subpages/page4/page4.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { CommentComponent } from './components/comment/comment.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'toolbar', component: ToolbarComponent},
  {path: 'subpages1', component: Page1Component},
  {path: 'subpages2', component: Page2Component},
  {path: 'subpages3', component: Page3Component},
  {path: 'subpages4', component: Page4Component},
  {path: 'homepage', component: HomepageComponent},
  {path: 'questionnaire', component: QuestionnaireComponent},
  {path: 'comment', component: CommentComponent},
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
