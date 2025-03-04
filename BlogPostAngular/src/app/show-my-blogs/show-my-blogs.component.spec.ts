import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyBlogsComponent } from './show-my-blogs.component';

describe('ShowMyBlogsComponent', () => {
  let component: ShowMyBlogsComponent;
  let fixture: ComponentFixture<ShowMyBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowMyBlogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMyBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
