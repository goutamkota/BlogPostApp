import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-show-my-blogs',
  imports: [CommonModule,RouterModule],
  templateUrl: './show-my-blogs.component.html',
  styleUrl: './show-my-blogs.component.scss'
})
export class ShowMyBlogsComponent {
  blogs: any = [];
  email!: string;
  constructor(public appService: AppService) {
    this.email = JSON.parse(sessionStorage.getItem('user') as string)?.email
  }
  ngOnInit() {
    // this.blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    this.appService.getAllPostsByEmail(this.email).subscribe({
      next: (res) => this.blogs = res,
      error: (err) => console.error(err)
    });
  }
}
