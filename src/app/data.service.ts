import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'https://test.noamananwaar.com/api/ProjectMaster/'

  constructor(private http: HttpClient) { }

  getAllProjectMaster() {
    return this.http.get(this.baseUrl + 'GetAllProjectMaster');
  }

  deleteProjectMaster(id: number) {
    return this.http.delete(this.baseUrl + 'DeleteProjectMaster?id=' + id);
  }

  addProjectMaster(data: any) {
    return this.http.post(this.baseUrl + 'AddProjectMaster', data);
  }

  updateProjectMaster(data: any) {
    return this.http.put(this.baseUrl + 'UpdateProjectMaster', data);
  }

  getProjectMasterById(id: number) {
    return this.http.get(this.baseUrl + 'GetProjectMasterById?id=' + id);
  }

}
