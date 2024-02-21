import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterWithThirdPartyComponent } from './register-with-third-party.component';

describe('RegisterWithThirdPartyComponent', () => {
  let component: RegisterWithThirdPartyComponent;
  let fixture: ComponentFixture<RegisterWithThirdPartyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterWithThirdPartyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterWithThirdPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
