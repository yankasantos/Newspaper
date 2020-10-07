import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ListPostScience } from '../model/list-post-science.model';
import { environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScienceService {

    urlRequest= `${environment.apiUrlScience}api-key=${environment.apiKey}`;
  
    // injetando o HttpClient
    constructor(private httpClient: HttpClient) { }

    // Headers
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

     // Obtem todos os noticias
    getNews(): Observable<ListPostScience[]> {
      return this.httpClient.get<ListPostScience[]>(this.urlRequest)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }


     // Manipulação de erros
    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Erro ocorreu no lado do client
        errorMessage = error.error.message;
      } else {
        // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    };
}
