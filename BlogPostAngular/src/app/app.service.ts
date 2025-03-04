import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  token = sessionStorage.getItem('token');
  sharePost: any
  public details$ = new BehaviorSubject<any>(null);

  setDetails(details: any) {
    this.details$.next(details);
    sessionStorage.setItem('user', JSON.stringify(details));
  }

  getDetails() {
    return this.details$.value || JSON.parse(sessionStorage.getItem('user') || 'null');
  }

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<any> {
    return this.http.get('http://localhost:3000/api/posts')
  }

  getAllPostsByEmail(email: string): Observable<any> {
    return this.http.get('http://localhost:3000/api/posts?email=' + email)
  }

  updatePost(id: string, body: any) {
    return this.http.put('http://localhost:3000/api/posts/'+id, body)
  }

  savePost(body: any) {
    return this.http.post('http://localhost:3000/api/posts', body)
  }

  findOrCreate(body:any) {
    return this.http.post('http://localhost:3000/api/auth', body)
  }
}
