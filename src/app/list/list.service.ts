import {Injectable} from '@angular/core'
import { Http, Response } from '@angular/http'
import {Observable} from 'rxjs/Observable'
import {Headers, RequestOptions} from '@angular/http'

import {List} from './list'
import {StaticService} from '../lib/service/static'

@Injectable()
export class ListService {

    constructor(
        private http: Http,
        private staticService: StaticService
    ) {
    }

    private listUrl = this.staticService.makeApi('articles')

    getList(): Observable<List[]> {
        return this.http.get(this.listUrl)
            .map(this.extractData)
            .catch(this.handleError)
    }

    private extractData(res: Response) {
        const body = res.json();
        return body || {}
    }

    private handleError (error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg)
    }


}