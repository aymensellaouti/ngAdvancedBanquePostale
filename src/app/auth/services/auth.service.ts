import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { LoginResponseDto } from '../dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { API } from '../../../config/api.config';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private plateformId: Object,
  ) {}

  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(API.login, credentials);
  }

  isAuthenticated(): boolean {
    if (isPlatformBrowser(this.plateformId))
      return !!localStorage.getItem('token');
    return false;
  }

  logout() {
    localStorage.removeItem('token');
  }
}
