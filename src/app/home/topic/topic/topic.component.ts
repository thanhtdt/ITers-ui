import {Component, OnInit} from "@angular/core";
import {UIAction} from "../../../shared/store/actions/ui.action";
import {Store} from "@ngrx/store";
import {AppState} from "../../../shared/store/reducers/app.reducer";
import {Observable} from "rxjs";
import {Topic} from "../../../shared/models/topic.model";

@Component({
  template: `
  <div class="jumbotron mb-3">
    <h1 class="display-4">ITers</h1>
    <span class="lead text-muted">Forum for TDT IT Student</span>
  </div>
  <ol class="breadcrumb">
    <li class="breadcrumb-item active">Topic</li>
  </ol>
  <div *ngIf="loadingTopics | async" class="d-flex justify-content-center">
    <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
  </div>
  <app-topic-list 
    *ngIf="!(loadingTopics | async)" 
    [topics]="topics | async">
  </app-topic-list>
  `,
  styleUrls: ['topic.component.scss']
})
export class TopicComponent implements OnInit {
  private topics: Observable<Topic[]>;
  private loadingTopics: Observable<boolean>;

  constructor(private uiAction: UIAction,
              private store: Store<AppState>) {
    this.store.dispatch(uiAction.startTopicsLoad());
  }

  ngOnInit() {
    this.topics = this.store.select(state => state.dataState.topics);
    this.loadingTopics = this.store.select(state => state.uiState.loadingTopics);
  }

}
