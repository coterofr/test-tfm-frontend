import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { JwtTokenService } from 'src/app/auth/services/jwt-token.service';
import Swal from 'sweetalert2';
import { Comment } from '../../model/comment';
import { CommentService } from '../../services/comment.service';

declare var bootstrap: any;

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {

  @Input() comment: Comment;
  @Output() deleteComment: EventEmitter<string>;

  edit: boolean = false;

  constructor(private commentService: CommentService,
              private jwtTokenService: JwtTokenService,
              private translateService: TranslateService) {
    this.comment = new Comment('', '', null, null);
    this.deleteComment = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this.enableTooltips();
  }

  private enableTooltips(): void {
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
  }

  get loggedUser(): string {
    return this.jwtTokenService.getName() as string;
  }

  get isModerator(): boolean {
    return this.jwtTokenService.isModerator();
  }

  get canEdit(): boolean {
    return this.comment.user?.name === this.loggedUser;
  }

  get canDelete(): boolean {
    return this.comment.user?.name === this.loggedUser || this.isModerator;
  }

  update() { }

  showModalError(message: string): void {
    Swal.fire({
      icon: 'error',
      title: this.translateService.instant("comment.errors.titleDeleted"),
      text: message,
      showCloseButton: true,
      showConfirmButton: false,
      timer: 2500
    });
  }

  delete(): void {
    Swal.fire({
      
      icon: 'question',
      title: this.translateService.instant('comment.confirmDelete.title'),
      text: this.translateService.instant('comment.confirmDelete.message'),
      showCloseButton: true,
      showConfirmButton: true,
      confirmButtonText: this.translateService.instant('comment.buttons.delete.title'),
      confirmButtonColor: '#dc3545',
      showCancelButton: true,
      cancelButtonText: this.translateService.instant('generic.buttons.cancel'),
      cancelButtonColor: '#0d6efd'

    }).then(async (result) => {
      if(result.isConfirmed && this.comment.post) {
        this.commentService.deleteComment(this.comment.post.id, this.comment.id).subscribe((deleted: {id: string}) => {
          this.deleteComment.emit(deleted.id);
        },
        error => {
          this.showModalError(this.translateService.instant('comment.errors.message'));
        });
      }
    });
  }
}
