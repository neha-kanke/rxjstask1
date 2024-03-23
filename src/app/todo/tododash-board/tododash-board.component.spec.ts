import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TododashBoardComponent } from './tododash-board.component';

describe('TododashBoardComponent', () => {
  let component: TododashBoardComponent;
  let fixture: ComponentFixture<TododashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TododashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TododashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
