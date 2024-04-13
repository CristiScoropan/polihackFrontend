import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {ErrorService} from "./error.service";
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs";
import {QuizModel} from "../../shared/quiz.model";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private url;
  constructor(private http: HttpClient, private tokenService: HttpService, private errorService: ErrorService) {
    this.url = tokenService.url + "/items"
  }

  getItems() {
    return this.http.get<QuizModel[]>(this.url, this.tokenService.getHttpOptions())
      .pipe(
        catchError(this.errorService.handleError)
      );
  }
}
