import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTypePickerComponent } from './user-type-picker.component';

describe('UserTypePickerComponent', () => {
  let component: UserTypePickerComponent;
  let fixture: ComponentFixture<UserTypePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTypePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTypePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
