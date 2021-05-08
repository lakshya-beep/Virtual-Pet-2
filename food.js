class Dogfood {
    constructor(){
    this.image=loadImage("Milk.png");
    this.food=0;
    this.lastfed=null;
    }

    getFood(){
    foodStock = database.ref('Food');
    foodStock.on("value",(data)=>{
        showfood=data.val();
        this.food=showfood;
        
        }
     );
    }

    


    addthefood(){
    this.food+=1;
    }

    updatefood(ff){
        database.ref('/').set({
            'Food': ff
        });
    }


    display(){
    
        var x = 70;
        var y = 130;

        if(this.food !== 0){

            for(var i = 0; i< this.food; i++){

                if(i%10 === 0){
                    y=y+80;
                    x=70;
                }
                x += 30;
                imageMode(CENTER);
                image(this.image,x,y,50,90);
                
            }

        }

       
    }

    
}
