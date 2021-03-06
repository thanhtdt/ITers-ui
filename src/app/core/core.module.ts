import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NotFoundComponent} from "./not-found/not-found.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FooterComponent} from "./footer/footer.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [NotFoundComponent, NavbarComponent, FooterComponent],
  exports: [NotFoundComponent, NavbarComponent, FooterComponent]
})
export class CoreModule {
}
