import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  token = sessionStorage.getItem('token');
  sharePost: any

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
}
