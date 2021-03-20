import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnelandComponent } from './oneland.component';

describe('OnelandComponent', () => {
  let component: OnelandComponent;
  let fixture: ComponentFixture<OnelandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnelandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnelandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
