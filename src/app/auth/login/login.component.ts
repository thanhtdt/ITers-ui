import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-login',
  template: `
  <div class="aligner">
    <div class="card w-25">
      <div class="card-header text-center">
        <h2>Login</h2>
      </div>
      <div class="card-block">
        <form>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                  <i class="fa fa-user" aria-hidden="true"></i>
              </span>
              <input type="text" class="form-control" id="school-id" aria-describedby="school-id" placeholder="School ID">
              <!--<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> VALIDATION-->
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                  <i class="fa fa-lock" aria-hidden="true"></i>
              </span>
              <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
          </div>
        </form>
      </div>
      <div class="card-footer">
        <div class="d-flex flex-row justify-content-end">
          <button type="button" class="btn btn-link mr-auto pl-0" routerLink="/register">Register</button>
          <button type="button" class="btn btn-link">Continue as Guest</button>
          <button type="button" class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
  
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
