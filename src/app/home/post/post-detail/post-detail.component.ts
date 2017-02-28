import {Component, OnInit, Input} from "@angular/core";
import {Post} from "../../../shared/models/post.model";
import {Account} from "../../../shared/models/account.model";
import {User} from "../../../shared/models/user.model";
import {RoleEnum} from "../../../shared/models/role.model";

@Component({
  selector: 'app-post-detail',
  template: `
  <div class="post-list mb-3">
    <div class="card ">
      <div class="card-header d-flex justify-content-end">
          <span class="lead mr-auto">
            #{{index+1}} <a [routerLink]="['/users', post.user.id]" class="mr-2">{{post.user.full_name}}</a><small class="text-muted">{{post.created_at | amUTCOffset:7 | amTimeAgo}}</small>
          </span>
          <!--IF MANAGING MOD OR ADMIN-->
          <button type="button" class="btn btn-sm btn-outline-success" *ngIf="canShowConfirmButton()">Confirm</button>
          
          <!--IF OWNER && !POST.CONFIRMED-->
          <button type="button" class="btn btn-sm btn-outline-primary ml-2" *ngIf="canShowEditButton()">Edit</button>
      </div>
      <div class="card-block" [ngClass]="{'bg-faded': !post.confirmed}">
        <div class="row">
          <div class="col-1 d-flex align-items-center flex-column">
            <i class="fa fa-caret-up fa-3x" aria-hidden="true"></i>
            <span class="lead">{{calculateVotes()}}</span>
            <i class="fa fa-caret-down fa-3x" aria-hidden="true"></i>
          </div>
          <div class="col-11">
            <p class="card-text" [froalaView]="post.content"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  @Input() post: Post;
  @Input() managingMods: User[];
  @Input() loggedInAccount: Account;
  @Input() index: number;

  constructor() {
  }

  ngOnInit() {
  }

  private calculateVotes(): number {
    let votes: number = 0;
    this.post.interacted_users.forEach(user => {
      if (user.pivot.liked)
        votes++;
      else votes--;
    });
    return votes;
  }


  private canShowEditButton(): boolean {
    return !this.post.confirmed && this.loggedInAccount.user.id === this.post.user.id
  }

  private canShowConfirmButton(): boolean {
    if (this.post.confirmed)
      return false;
    else if (this.loggedInAccount.current_role.is(RoleEnum.ADMIN))
      return true;
    else if(this.loggedInAccount.current_role.is(RoleEnum.MOD))
      return this.managingMods.some(mod => mod.id === this.loggedInAccount.user.id);
  }
}
