import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmStoreComponent } from './adm-store.component';

describe('AdmStoreComponent', () => {
  let component: AdmStoreComponent;
  let fixture: ComponentFixture<AdmStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
