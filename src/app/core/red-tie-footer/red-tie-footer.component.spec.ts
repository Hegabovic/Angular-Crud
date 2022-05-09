import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedTieFooterComponent } from './red-tie-footer.component';

describe('RedTieFooterComponent', () => {
  let component: RedTieFooterComponent;
  let fixture: ComponentFixture<RedTieFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedTieFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedTieFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
