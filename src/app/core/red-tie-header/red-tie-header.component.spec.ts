import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedTieHeaderComponent } from './red-tie-header.component';

describe('RedTieHeaderComponent', () => {
  let component: RedTieHeaderComponent;
  let fixture: ComponentFixture<RedTieHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedTieHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedTieHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
