import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartlivingComponent } from './smartliving.component';

describe('SmartlivingComponent', () => {
  let component: SmartlivingComponent;
  let fixture: ComponentFixture<SmartlivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartlivingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartlivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
