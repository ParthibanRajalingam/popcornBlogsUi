import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { CategoryComponent } from './category/category.component';
import { DetailedBlogComponent } from './detailed-blog/detailed-blog.component';


export const APP_ROUTES: Routes = [
  { path: 'home', component: MainContentComponent },
  { path: 'category', component: CategoryComponent  },
   { path: 'blogDetails', component: DetailedBlogComponent  },

  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
   { path: '0',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', component: MainContentComponent }
];
