import { Component } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { StorageService } from "src/services/storage.service";

@Component({
  selector: 'loginPage',
  templateUrl: './loginPage.component.html'
})

export class LoginPage {
  constructor(private readonly storageService: StorageService, private router: Router) {
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
    this.storageService.saveTrainer(userName);
    this.router.navigateByUrl('/pokemons')
    this.loading = false;
  }
}
