import { Component } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { StorageService } from "src/services/storage.service";

@Component({
  selector: 'loginPage',
  templateUrl: './loginPage.component.html'
})

export class LoginPage {
  constructor(private readonly storageService: StorageService) {
  }
  loading: boolean = false;
  loginForm: FormGroup = new FormGroup({
    trainerName: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ])
  })
  get trainerName(): AbstractControl {
    return this.loginForm.get('trainerName')
  }
  onClick() {
    this.loading = true;
    const userName: string = this.loginForm.value.trainerName
    console.log('click!', userName);
    this.storageService.saveTrainer(userName);
    setTimeout(() => {
      console.log('ADD REDIRECT');
      this.loading = false;
    }, 500);
  }
}
