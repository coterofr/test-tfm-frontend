import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPublishComponent } from './post-publish.component';

describe('PostPublishComponent', () => {
  let component: PostPublishComponent;
  let fixture: ComponentFixture<PostPublishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPublishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
