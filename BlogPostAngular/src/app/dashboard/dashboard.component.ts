import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  blogs: any = []; // Store user's blogs

  constructor(private router: Router) {}

  ngOnInit() {
    // Mock API Call - Replace with real API
    const allBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const userEmail = sessionStorage.getItem('email');

    // Filter blogs by logged-in user
    this.blogs = allBlogs.filter((blog:any) => blog.author === userEmail);
  }
}
