import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifingComponent } from './modifing.component';

describe('ModifingComponent', () => {
  let component: ModifingComponent;
  let fixture: ComponentFixture<ModifingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
