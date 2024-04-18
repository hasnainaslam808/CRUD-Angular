import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: any = {};
  isEditingProject: boolean = false;

  constructor(private httpService: DataService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((res: any) => {
      console.log(res);
      if (res.id) {
        this.isEditingProject = true;
        this.httpService.getProjectMasterById(res.id).subscribe((proj: any) => {
          this.project = proj.data[0];
        })
      }
    })
  }


  addProjectMaster() {
    this.httpService.addProjectMaster(this.project).subscribe((res: any) => {
      alert("Project added successfully");
      this.router.navigate(['/'])
    })
  }

  updateProject () {
    this.httpService.updateProjectMaster(this.project).subscribe((res: any) => {
      alert("Updated project successfully");
      this.router.navigate(['/']) 
    })
  }
}
