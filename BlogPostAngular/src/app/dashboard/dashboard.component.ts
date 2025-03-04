import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  blogs: any = [];

  constructor(public appService: AppService) { }

  ngOnInit() {
    this.fetchAllPosts()
  }
  fetchAllPosts() {
    this.appService.getAllPosts()
      .subscribe({
        next: (res) => this.blogs = res,
        error: (err) => console.error(err)
      });
  }
}
