import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarOptionComponent } from './nav-bar-option.component';

describe('NavBarOptionComponent', () => {
  let component: NavBarOptionComponent;
  let fixture: ComponentFixture<NavBarOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
