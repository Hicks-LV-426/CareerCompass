import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as YAML from 'yaml';
import { Compass } from '../interfaces/compass';
import { CompassTree } from '../interfaces/compass-tree';

@Injectable({
  providedIn: 'root'
})
export class CompassService {

  baseUrl: string = '/assets/compass/';

  constructor(private http: HttpClient) { }

  getCompasses() : Observable<Compass[]> {
    let compasses: Compass[] = []
    let listUrl = this.baseUrl + 'list.yml'
    
    this.http.get(listUrl, { responseType: 'text' }).subscribe((data: any) => {
      let yamlObject = YAML.parse(data)

      for(let index in yamlObject.compassFiles) {
        compasses.push(yamlObject.compassFiles[index])
      }
    });
    return of(compasses);
    
  }

  getCompass(fileName: string): Observable<CompassTree | undefined> {

    if(fileName == null || fileName?.length == 0) {
      return of(undefined);
    }
    const fileUrl = this.baseUrl + fileName;

    return this.http.get(fileUrl, { responseType: 'text' }).pipe(
      map(compass => YAML.parse(compass))
    );
  }
}
