import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from './mynews';

@Injectable({
  providedIn: 'root'
})
export class MyhttpserveService {

  url :string="http://localhost:3000/news";
  constructor(private httpcli:HttpClient) { }

addNews(newobj : News ):Observable<News>
{

 return this.httpcli.post<News>(this.url,newobj);

}

getallNews():Observable<Array<News>>
{
  return this.httpcli.get<Array<News>>(this.url);
}


}
