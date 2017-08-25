import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipModule } from 'ngx-bootstrap';
import { StatusComponent } from './status.component';

import { ModalsModule } from '../../modals/modals.module';
import { SharedModule } from '../../shared/shared.module';
import { RpcModule } from '../rpc/rpc.module';

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusComponent ],
      imports: [
       SharedModule,
       RpcModule.forRoot(),
       TooltipModule.forRoot(),
       ModalsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getIconNumber', () => {
    component.getIconNumber();
    expect(component.getIconNumber).toBeTruthy();
  });

  it('should rpc_walletEncryptionStatus', () => {
    expect(component.rpc_walletEncryptionStatus).toBeTruthy();
  });

  it('should get encryptionStatus', () => {
    expect(component.encryptionStatus).toBe('Locked');
  });
});
