import { SharedModule } from './../shared/shared.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import { CharacterComponent } from './character.component';
import { CharacterService } from './character.service';
import { CharacterModule } from './character.module';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let service: CharacterService;
  let fixture: ComponentFixture<CharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      imports: [
        SharedModule,
        HttpModule,
        CharacterModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('service should create', () => {
    expect(service).toBeTruthy();
  });
});
