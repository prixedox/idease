import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDTO } from '../models/CategoryDTO';

@Injectable({
  providedIn: 'root'
})
export class ShortcutService {
  private jsonFilePath = 'assets/shortcuts.json';

  constructor(private http: HttpClient) { }

  getShortcuts(): Observable<CategoryDTO[]> {
    return this.http.get<CategoryDTO[]>(this.jsonFilePath);
  }
}
