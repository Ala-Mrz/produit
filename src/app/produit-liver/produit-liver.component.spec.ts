import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitLiverComponent } from './produit-liver.component';

describe('ProduitLiverComponent', () => {
  let component: ProduitLiverComponent;
  let fixture: ComponentFixture<ProduitLiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitLiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitLiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
