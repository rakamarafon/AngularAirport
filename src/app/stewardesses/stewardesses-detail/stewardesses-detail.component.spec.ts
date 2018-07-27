import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StewardessesDetailComponent } from './stewardesses-detail.component';

describe('StewardessesDetailComponent', () => {
  let component: StewardessesDetailComponent;
  let fixture: ComponentFixture<StewardessesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StewardessesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StewardessesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
