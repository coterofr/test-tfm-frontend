import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { HomeComponent } from './components/home/home.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostPublishComponent } from './components/post-publish/post-publish.component';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    PostListComponent,
    PostItemComponent,
    PostPublishComponent,
    PostDetailsComponent,
    CommentListComponent,
    CommentItemComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule
  ]
})
export class PostModule { }
