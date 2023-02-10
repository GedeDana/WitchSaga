class WitchSaga {
    constructor(years = 0,ageDeath = [],deathYears =[]) {
        this.years = years;
        this.ageDeath = ageDeath;
        this.deathYears = deathYears;
        this.numberPepoleKilledOnYeras = [];
        this.numberPepoleKilledOnResult = [];
        this.alphabed = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    }

    killVillagers() {
        let killed;
        let IncrementArray = [];
        for (var i = 0; i <= this.years; i++) {
            if(i == 2){

                const lastIndexArray = IncrementArray[IncrementArray.length - 1];
                IncrementArray.push(lastIndexArray);
                
            } else {
                if(i >= 2){
                    const lastIndexArrayOne = IncrementArray[IncrementArray.length - 1];
                    const lastIndexArrayTwo = IncrementArray[IncrementArray.length - 2];
                    IncrementArray.push(lastIndexArrayOne + lastIndexArrayTwo);
                } else {
                    IncrementArray.push(i);

                }
            }
 
            killed = IncrementArray.reduce(function (a, b) {
            return a + b;
            
            });
 
        }       

         return killed;
    }
    
    YearsKilled() {

       if(this.ageDeath.length == this.deathYears.length)
       {
        
          for(var i = 0; i < this.ageDeath.length; i++){
          
            this.numberPepoleKilledOnYeras[i] = this.deathYears[i] - this.ageDeath[i];
            this.years =  this.numberPepoleKilledOnYeras[i];
       
            console.log(`Person ${this.alphabed[i]} Born on Years : ${this.deathYears[i]} - ${this.ageDeath[i]}, number of pepole killed on years ${this.numberPepoleKilledOnYeras[i]} = `, this.killVillagers());
      
            this.numberPepoleKilledOnResult.push(this.killVillagers());
          }
          return  this.averageKilled();
       } else {
         return console.log("The Both array length must be equal");
       }
       
    }

    averageKilled() {
  
      if(this.numberPepoleKilledOnResult.length == 0)  {
         return console.log("Value still null");
      } else {

        let avgkilled = this.numberPepoleKilledOnResult.reduce(function (a, b) {
            return  (a + b)/2;
            
        });
        return console.log("Averange killed is ",avgkilled );
      }
       
    }

}

var witch  = new WitchSaga(3,[10,13],[12,17]);
witch.YearsKilled();
