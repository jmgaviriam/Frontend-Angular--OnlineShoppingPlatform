import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { LOCAL_STORAGE } from 'ngx-webstorage';
import { distinctUntilChanged } from 'rxjs';
import { UserTypeService } from 'src/app/services/user-type/user-type.service';

@Directive({
  selector: '[sofkaShowForRoles]',
})
export class ShowForRolesDirective implements OnInit, OnDestroy {
  @Input('sofkaShowForRoles') allowedRoles?: string[];
  allowToShow = false;
  userType: string;
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private userTypeService: UserTypeService
  ) {
    this.userType = this.userTypeService.getUserType();
    localStorage.setItem('role', this.userType);
  }

  ngOnDestroy(): void {
    this.allowToShow = false;
  }
  ngOnInit(): void {
    const userRole = localStorage.getItem('role');
    this.allowToShow = Boolean(
      userRole && (userRole === 'Customer' || userRole === 'Vendor')
    );
    distinctUntilChanged();
    this.allowToShow
      ? this.viewContainerRef.createEmbeddedView(this.templateRef)
      : this.viewContainerRef.clear();
  }
}
