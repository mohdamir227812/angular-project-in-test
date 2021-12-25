import { Component, OnInit } from "@angular/core";





@Component({
    selector:'app-promise',
    templateUrl:'./promise.component.html',
    styleUrls:['./promise.component.css']
})

export class promiseComponent implements OnInit{
    //asyncPromise: any;
   /* datahttpget:any=[];
    constructor(private _http:HttpClient){

    }

    addproduct:any=[];
    urls="https://jsonplaceholder.typicode.com/users";*/


   /* hpproduct(): boolean{
        return true 
    };

    hp={
        price:45000,
        color:"light color",
        model:"hp"
    }
    delprodect(){
        return false
    }
    del={
        price:55000,
        color:"black color",
        model:"del"
    }
    */
   /* async asyncfun(){
    
        let datas=await this.asyncPromise;
        console.log(datas)
    }*/

    onsearch(val:string){
      
    }
     
    ngOnInit(): void {
    

    
     /* olet  asyncPromise=new Promise((resolve,rejects)=>{
           setTimeout(() => {
            resolve("async promise awiet")
           }, 3000);
          
       });*/
    
          
        /* let httpPromise= new Promise((resolve,reject)=>{
             setTimeout(() => {
                resolve(this.datahttpget)
             }, 5000);
             
         })

          httpPromise.then((res)=>{
              this.datahttpget=res
          })
        
        this._http.get(this.urls).subscribe(res=>{this.datahttpget=res});*/


        
     /*let  promises=new Promise((resolve,reject)=>{
         if(this.hpproduct()){
            setTimeout(() => {
                resolve(this.hp);
            }, 5000);
         }else if(this.delprodect()){
             setTimeout(() => {
                resolve(this.del);
             }, 5000);
                  
         }else{
             setTimeout(() => {
                reject("this product error");
             }, 5000);
            
         }
             
       })
       promises.then((data)=>{
           console.log(data);
           this.addproduct=data;

       }).catch((err)=>{
           console.log(err);
           this.addproduct=err
       })*/
}
} 