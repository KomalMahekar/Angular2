export class ImgClass{
    imgUrl;
    state;


constructor(imgUrl:string,state:string){
    this.imgUrl=imgUrl;
    this.state=state;
}
toggleUrl():void{
    if(this.imgUrl=="assets/off.png"){
        this.imgUrl="assets/on.png";
        this.state="OFF";
    }
    else{
        this.imgUrl="assets/off.png";
        this.state="ON";

    }

}
}