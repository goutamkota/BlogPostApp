import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-update-blog',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-update-blog.component.html',
  styleUrl: './create-update-blog.component.scss'
})
export class CreateUpdateBlogComponent {
  blog = { title: '', content: '', author: '' };
  isEditMode = false;
  blogId: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.blogId = this.route.snapshot.paramMap.get('id');
    if (this.blogId) {
      this.isEditMode = true;
      const allBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
      this.blog = allBlogs.find((blog:any) => blog.id == this.blogId) || this.blog;
    }
  }

  saveBlog() {
    let allBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');

    if (this.isEditMode) {
      const index = allBlogs.findIndex((blog:any) => blog.id == this.blogId);
      allBlogs[index] = this.blog;
    } else {
      // this.blog.author = sessionStorage.getItem('email');
      // this.blog.id = Date.now();
      allBlogs.push(this.blog);
    }

    localStorage.setItem('blogs', JSON.stringify(allBlogs));
    this.router.navigate(['/dashboard']);
  }
}
