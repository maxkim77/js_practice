// Train 클래스 생성
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.ligthsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf(){
        console.log(this);
    }
    getPrototype(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}