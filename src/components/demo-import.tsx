
class Person {
    energy : number =0;
    readonly MAX_ENERGY :number = 100;   
    readonly MIN_ENERGY :number = 0;  
    walk(distance : number,time : number){
        this.energy -=distance/time
        return this;
    }
	eat(newEnergy: number){
        if (newEnergy>this.MAX_ENERGY||newEnergy<this.MIN_ENERGY) {
            return "te hostigaste :v"
        }
        this.energy += newEnergy;
        return this;
	}
	wakeUp(){
        this.energy=100;    
        return this;
    }
    
}
