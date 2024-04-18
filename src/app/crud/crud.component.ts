import { Component, OnInit } from '@angular/core';
import { Project } from "../model/Project";
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  allProjects: any = [];

  constructor(private httpService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProjectMaster();
  }

  getAllProjectMaster() {
    this.httpService.getAllProjectMaster().subscribe((res: any) => {
      console.log(res);
      this.allProjects = res.data;
    })
  }

  deleteProjectMaster(id: number) {
    this.httpService.deleteProjectMaster(id).subscribe((res: any) => {
      alert("project deleted successfully");
      this.getAllProjectMaster()
    })
  }

  editProject(id: number) {
    this.router.navigate(['/edit-project/' + id]);
  }
}
