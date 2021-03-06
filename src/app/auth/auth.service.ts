import {Injectable, Injector} from "@angular/core";
import {RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Account} from "../shared/models/account.model";
import {JwtHelper} from "angular2-jwt";
import {GenericService} from "../shared/services/generic.service";

@Injectable()
export class AuthService extends GenericService{

  constructor(injector: Injector) {
    super(injector);
    this.BASE_URL += '/auth';
  }

  public login(schoolId: string, password: string): Observable<Account> {
    return this.post(new RequestOptions({url: this.BASE_URL + '/login'}), {
      school_id: schoolId,
      password: password
    }).map(this.extractToken)
      .do(token => localStorage.setItem('id_token', token))
      .map(this.extractAccount)
  }

  public register(user: any, account: any): Observable<string> {
    return this.post(new RequestOptions({url: this.BASE_URL + '/register'}), {
      user: {
        full_name: user.full_name,
        email: user.email,
        start_year: user.start_year,
        birthday: user.birthday
      },
      account: {
        school_id: account.school_id,
        password: account.password
      },
      role: {privilege_level: 1}
    }).map(resp => resp.json().msg);
  }

  private extractToken(response: Response) {
    return response.json().data.token;
  }

  private extractAccount(token: string) {
    let jwtHelper = new JwtHelper();
    let rawAccount = jwtHelper.decodeToken(token);
    return new Account(rawAccount);
  }
}
