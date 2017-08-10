import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsModule } from '../../modals.module';
import { PasswordComponent } from './password.component';


import { SharedModule } from '../../../shared/shared.module';
import { RpcModule } from '../../../core/rpc/rpc.module';


describe('PasswordComponent', () => {
  let component: PasswordComponent;
  let fixture: ComponentFixture<PasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RpcModule.forRoot(),
        ModalsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should get password input type', () => {
    component.passwordInputType();
    expect(component.password).toBeUndefined();
  });

  it('should get showPass', () => {
    expect(component.showPass).toBe(false);
  });

  /* TODO: Can't do RPC yet
  it('should unlock', () => {
    component.unlock();
    expect(component.password).toBe('');
  });*/
});
