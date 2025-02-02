import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private isLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isLoading$ = this.isLoadingSubject.asObservable();
  constructor() { }

  isLoading(isLoading: boolean) {
    this.isLoadingSubject.next(isLoading);
  }
}
