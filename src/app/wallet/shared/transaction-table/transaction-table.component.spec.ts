import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsTableComponent } from './transaction-table.component';
import { SharedModule } from '../../../shared/shared.module';
import { WalletModule } from '../../../wallet/wallet.module';

import { ElectronService } from 'ngx-electron';
import { RPCService } from '../../../core/rpc/rpc.service';

describe('TransactionTableComponent', () => {
  let component: TransactionsTableComponent;
  let fixture: ComponentFixture<TransactionsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
         SharedModule,
         WalletModule.forRoot()
      ],
      providers: [
        ElectronService,
        RPCService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*
  it('should change page', () => {
    // component.pageChanged()
    expect(component.pageChanged).toBeTruthy();
  });
*/
  it('should get log', () => {
    expect(component.log).toBeDefined();
  });

  it('should get txService', () => {
    expect(component.txService).toBeDefined();
  });
});
