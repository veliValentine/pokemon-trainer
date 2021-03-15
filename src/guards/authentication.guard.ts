import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { StorageService } from "src/services/storage.service";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router, private readonly storageService: StorageService) {
  }
  canActivate(): boolean {
    const trainer = this.storageService.getTrainer();
    if (trainer) {
      return true;
    }
    this.router.navigateByUrl('/login')
    return false;
  }
}
