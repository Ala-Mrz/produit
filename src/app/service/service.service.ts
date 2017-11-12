import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()


export class ServiceService{
    id:any;
    urll:string;
    constructor(private http:Http){

    }

    private url:string = "https://anapioficeandfire.com/api/books";
    getProducts(){
        return this.http.get(this.url).map((response: Response) => response.json());
    }
    
    getProduct(id){
        this.urll = "https://anapioficeandfire.com/api/books/"+this.id;
        return this.http.get(this.urll).map((response: Response) => response.json());
    }
}