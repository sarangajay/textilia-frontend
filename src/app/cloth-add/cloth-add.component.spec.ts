import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothAddComponent } from './cloth-add.component';

describe('ClothAddComponent', () => {
  let component: ClothAddComponent;
  let fixture: ComponentFixture<ClothAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClothAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClothAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
