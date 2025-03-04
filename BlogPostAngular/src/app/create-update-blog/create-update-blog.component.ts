import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-create-update-blog',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-update-blog.component.html',
  styleUrl: './create-update-blog.component.scss'
})
export class CreateUpdateBlogComponent {
  blog: any = {
    title: '',
    content: ''
  }
  isEditMode: boolean = false;
  blogId: any;

  constructor(private route: ActivatedRoute, private router: Router, private appService: AppService) {}

  ngOnInit() {
    this.blogId = this.route.snapshot.paramMap.get('id');
    if (this.blogId) {
      this.isEditMode = true;
      this.blog = this.appService.sharePost
    }
  }

  updateBlog() {
    this.appService.updatePost(this.blogId, this.blog).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.error(err)
    })
  }

  createBlog() {
    this.appService.savePost(this.blog).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.error(err)
    })
  }

  saveBlog() {
    if (this.isEditMode) {
      this.updateBlog()
    } else {
      this.createBlog()
    }
    this.router.navigate(['/dashboard']);
  }

}
