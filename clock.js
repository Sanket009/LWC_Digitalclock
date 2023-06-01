import { LightningElement, track } from 'lwc';

export default class Todomanager extends LightningElement {
   @track time;
   @track greeting;

    connectedCallback(){

        this.getTime();
        setInterval(() => {
            this.getTime();
            
        }, 1000);
    }

    getTime(){ 


        const date= new Date();
        const hour= date.getHours();
        const min= date.getMinutes();

        this.time=`${this.getHour(hour)}:${this.getdouble(min)} ${this.getMidday(hour)}`;
        this.setGreeting(hour);

    }



    getHour(hour){

        return hour==0? 12: hour>12?(hour-12): hour;//this is ternery operation conditional statement in a single line  return 12 if hour==0


    }
    getMidday(hour){

        return hour>=12?"pm":"am";

    }
    getdouble(digit){

        return digit<10?"0"+digit: digit;


    }


    setGreeting(hour){
        if(hour<12){
            this.greeting="Good Morning";}
            else if (hour==12 || hour<18) {
                this.greeting="Good Afternoon";}
                else if(hour> 18 && hour<21){
                    this.greeting="Good Evening";


                }
                
            else {
                this.greeting="Good Night";
 
        }



    }

}






