import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeaturedPostsComponent } from './featured-posts/featured-posts.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PopularPostsComponent } from './popular-posts/popular-posts.component';
import { TagsComponent } from './tags/tags.component';
import { FooterComponent } from './footer/footer.component';
import { PreLoaderComponent } from './pre-loader/pre-loader.component';
import { MainContentComponent } from './main-content/main-content.component';
import { CategoryComponent } from './category/category.component';
import { RouterModule, Routes } from '@angular/router';
import {  APP_ROUTES } from './app.route';
import { CategoryHeaderComponent } from './category-header/category-header.component';
import { DetailedBlogComponent } from './detailed-blog/detailed-blog.component';
import { CommentsComponent } from './comments/comments.component';
import { HttpClientModule } from '@angular/common/http';  
import {HttpCallsService} from './http-calls.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { LoaderComponent } from './loader/loader.component';
import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
} from 'angular-6-social-login';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturedPostsComponent,
    AllPostsComponent,
    PopularPostsComponent,
    TagsComponent,
    FooterComponent,
    PreLoaderComponent,
    MainContentComponent,
    CategoryComponent,
    CategoryHeaderComponent,
    DetailedBlogComponent,
    CommentsComponent,
    LoaderComponent
  ],
  imports: [RouterModule.forRoot(
      APP_ROUTES
      , { useHash: true }
     ),
    BrowserModule, HttpClientModule,NgxPaginationModule, SocialLoginModule
  ],
  providers: [HttpCallsService,
  {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Configs 
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('1135328786639704')
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('384231934635-e1dbb3ud6osa2iaotioak51cb0nkgpuj.apps.googleusercontent.com')
        }
      ]
  );
  return config;
}
