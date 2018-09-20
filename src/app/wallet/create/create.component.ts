import { Component, OnDestroy, OnInit } from '@angular/core';
import { Log } from 'ng2-logger';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ModalsService } from '../modals/modals.service';

@Component({
  selector: 'wallet-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, OnDestroy {

  faEyeSlash: any = faEyeSlash;
  faEye: any = faEye;
  walletNewPassword: string;
  walletRepeatPassword: string;
  showPassword: boolean = false;
  termsChecked: boolean = false;
  showSidebarError: boolean = false;
  showContentError: boolean = false;
  phraseCopied: boolean = false;
  step: number = 1;
  recoveryPhrase: Array<string> = [
    'lorem',
    'dolor',
    'sit',
    'amet',
    'lorem',
    'dolor',
    'lorem',
    'dolor',
    'sit',
    'amet',
    'lorem',
    'dolor',
    'lorem',
    'dolor',
    'sit',
    'amet',
    'lorem',
    'dolor',
    'lorem',
    'dolor',
    'sit',
    'amet',
    'lorem',
    'dolor',
  ];
  walletWizard: any = [
    {
      valid: (): boolean => true
    },
    {
      valid: (): boolean => {
        if (!this.termsChecked) {
          this.showSidebarError = true;
          return false;
        }
        if (this.walletNewPassword === null || this.walletNewPassword === undefined
          || this.walletRepeatPassword === null || this.walletRepeatPassword === undefined) {
          this.showContentError = true;
          return false;
        }
        if (this.walletRepeatPassword !== this.walletNewPassword) {
          this.showContentError = true;
          return false;
        }
        this.showContentError = false;
        return true;
      }
    },
    // {
    //   valid: (): boolean => {
    //     if (this.walletNewPassword && this.walletRepeatPassword &&
    //       this.walletRepeatPassword === this.walletNewPassword) {
    //       return true;
    //     }
    //     this.showContentError = true;
    //     return false;
    //   }
    // },
    {
      valid: (): boolean => true
    }
  ];
  private log: any = Log.create('create.component');
  private destroyed: boolean = false;

  constructor(
    private router: Router, private modalsService: ModalsService
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.destroyed = true;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  passwordLabelText(): string {
    return this.showPassword ? 'Hide' : 'Show';
  }

  nextStep() {
    if (this.step === 3) {
      const data: any = {
        forceOpen: true,
        modalsService: this.modalsService
      };
      this.modalsService.openSmall('createWallet', data);
      // this.step++;
      // this.goTo('main');
      // return;
    }

    else if (!this.walletWizard[this.step].valid()) {
      return;
    }

    this.step++;
    this.showContentError = false;
    this.showSidebarError = false;
  }

  prevStep() {
    this.showSidebarError = false;
    this.showContentError = false;
    this.step--;
  }

  stepProgress(): number {
    const step = this.step;
    if (step < 3) {
      return step+1 * 33;
    }
    return 100;
  }

  stepTitle(): string {
    const step = this.step;
    if (step === 1) {
      return 'Create a password';
    } else if (step === 2) {
      return 'Save your recovery phrase';
    }
    return 'Confirm your recovery phrase';
  }

  clipboardIcon(): string {
    let path = './assets/icons/SVG/';
    if (this.phraseCopied) {
      path += 'copy-md-active.svg';
      return path;
    }
    path += 'copy-md.svg';
    return path;
  }

  clipboardText(): string {
    if (this.phraseCopied) {
      return 'Copied';
    }
    return 'Copy to clipboard';
  }

  copyToClipboard() {
    this.phraseCopied = true;
  }

  goTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
