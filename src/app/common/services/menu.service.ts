import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, of, shareReplay, skipWhile, tap, throwError } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { MenuItem } from '../interface/menuModel';
import { BaseResponse } from '../interface/shareModel';



@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private routesSubject = new BehaviorSubject<MenuItem[]>([]);
  routes$ = this.routesSubject.asObservable();

  constructor(private http: HttpClient,private router: Router,) {}

  async getMenu() {
    const path = '/api/Menu/queryMenu';
    return this.http.post<BaseResponse<MenuItem[]>>(path, {}).pipe(
      map(res=> res.isSuccess ? res.data: []),
      tap(res=> this.routesSubject.next(res)),
      catchError(async err=>{console.log('MenuErr')})
    ).subscribe();
  }
  /**訂閱Menu */
  MenuList(): Observable<MenuItem[]>{
    return this.routes$.pipe(skipWhile((data) => !data));
  }


}
