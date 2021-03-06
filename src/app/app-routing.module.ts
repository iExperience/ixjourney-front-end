import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', loadChildren: './pages/welcome/welcome.module#WelcomePageModule' },
  { path: 'fields', loadChildren: './pages/fields/fields.module#FieldsPageModule' },
  { path: 'courses', loadChildren: './pages/courses/courses.module#CoursesPageModule' },
  { path: 'course-info', loadChildren: './pages/course-info/course-info.module#CourseInfoPageModule' },
  { path: 'course-cities', loadChildren: './pages/course-cities/course-cities.module#CourseCitiesPageModule' },
  { path: 'course-city', loadChildren: './pages/course-city/course-city.module#CourseCityPageModule' },
  { path: 'financialaid', loadChildren: './pages/financialaid/financialaid.module#FinancialaidPageModule' },
  { path: 'youroptions', loadChildren: './pages/youroptions/youroptions.module#YouroptionsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
