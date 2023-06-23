import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubagentsComponent } from './subagents.component';

describe('SubagentsComponent', () => {
  let component: SubagentsComponent;
  let fixture: ComponentFixture<SubagentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubagentsComponent]
    });
    fixture = TestBed.createComponent(SubagentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
