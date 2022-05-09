import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedTieSidebarComponent } from './red-tie-sidebar.component';

describe('RedTieSidebarComponent', () => {
  let component: RedTieSidebarComponent;
  let fixture: ComponentFixture<RedTieSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedTieSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedTieSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
