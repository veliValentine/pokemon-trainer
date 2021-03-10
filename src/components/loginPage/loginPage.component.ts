import { Component } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { saveTrainer } from '../../utils/storageHelper'

@Component({
  selector: 'loginPage',
  templateUrl: './loginPage.component.html'
})

export class LoginPage {

  loading: boolean = false;

  loginForm: FormGroup = new FormGroup({
    trainerName: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ])
  })

  get trainerName() : AbstractControl {
    return this.loginForm.get('trainerName')
  }

  onClick() {
    this.loading = true;
    const userName: string = this.loginForm.value
    console.log('click!', userName);
    saveTrainer(userName)
    setTimeout(() => {
      console.log('ADD REDIRECT');
      this.loading = false;
    }, 500);
  }
}
