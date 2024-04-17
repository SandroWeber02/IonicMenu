import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPagePage } from './add-page.page';

describe('AddPagePage', () => {
  let component: AddPagePage;
  let fixture: ComponentFixture<AddPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
