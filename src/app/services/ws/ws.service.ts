import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class WsService {
  servidor = "../RadAcApi";
  urlToken: string = this.servidor + '/token/';

  constructor(public http: Http, private authHttp: AuthHttp) {

  }

  /**
   * Metodo HTTP nativo
   * @param user 
   */
  get(user: Object) {
    let head = new Headers(
      {
        'Content-Type': 'application/json'
      }
    );
    let options = new RequestOptions({ headers: head });
    
    return this.http.post(this.urlToken, {Usuario:user}, options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  getMail(user: Object) {
    let head = new Headers(
      {
        'Access-Control-Allow-Origin': 'http://localhost',
        'Content-Type': 'application/json'
      }
    );
    let options = new RequestOptions({ headers: head });

    return this.http.post(this.urlToken + "mail/", user, options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }



  chagePass(user: Object) {

    return this.authHttp.post(this.urlToken + "cambia/", user)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  /**
   * Wrapper de HTTP que envia el token en la cabecera.
   * Para hacer peticines autenticado.
   * @param user 
   */
  getJwt(url, user: Object) {
    return this.authHttp.get(url, user)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  getItems(entidad: string) {

    return this.authHttp.get(this.servidor + "/" + entidad + "/")
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  
  getItem(entidad: string, id: string) {


    let ruta: string = this.servidor + "/" + entidad + "/" +id;
  
    return this.authHttp.get(ruta)      
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);

  }

  private extractData(res: Response) {
    if(res.text())
    {
      return res.text();
    }
    let body = res.json();
    if (body.values)
      return body.values;
    else
      return body || {};
  }



  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || JSON.stringify(error);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      if (error.status == 401)
        localStorage.removeItem("token");
      //this.router.navigateByUrl("/Login");
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    console.error('CATCH');

    return Observable.throw(errMsg);
  }
}
