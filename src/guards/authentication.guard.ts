import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
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
      console.log('hi');
      return true;
    }
    console.log('ho');
    this.router.navigateByUrl('/login')
    return false;
  }
}
