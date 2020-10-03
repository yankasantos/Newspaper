import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyNewsComponent } from './technology-news.component';

describe('TechnologyNewsComponent', () => {
  let component: TechnologyNewsComponent;
  let fixture: ComponentFixture<TechnologyNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
