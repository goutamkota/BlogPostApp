import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateBlogComponent } from './create-update-blog.component';

describe('CreateUpdateBlogComponent', () => {
  let component: CreateUpdateBlogComponent;
  let fixture: ComponentFixture<CreateUpdateBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUpdateBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
