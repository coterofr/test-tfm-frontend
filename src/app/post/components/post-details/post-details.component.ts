import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import { JwtTokenService } from 'src/app/auth/services/jwt-token.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Post } from '../../model/post';
import { CommentService } from './../../services/comment.service';
import { PostService } from './../../services/post.service';

declare var bootstrap: any;

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  id!: string;
  post: Post;

  name!: string;

  constructor(private postService: PostService,
              private commentService: CommentService,
              private jwtTokenService: JwtTokenService,
              private alertService: AlertService,
              private translateService: TranslateService,
              private route: ActivatedRoute) {
    this.post = new Post('', '', '', null, null, new Date(), false, '', null, 0);
  }

  ngOnInit(): void {
    this.enableTooltips();
    this.initData();
  }

  private enableTooltips(): void {
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
  }

  private async initData() {
    const paramMap: ParamMap = await firstValueFrom(this.route.paramMap);
    this.id = paramMap.get('id') as string;
    this.post = await firstValueFrom(this.postService.getPost(this.id));

    this.name = this.jwtTokenService.getName() as string;

    this.loadComments();
  }

  private loadComments() { }

  get isLoggedProducer(): boolean {
    return this.jwtTokenService.isProducer();
  }

  comment() { }
}
