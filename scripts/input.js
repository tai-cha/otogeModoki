let lane_nums = {
    87: 1,
    83: 2,
    32: 3,
    75: 4,
    79: 5
}

class pushed_state{
    constructor(){
        this._data = {};
        Object.keys(lane_nums).forEach((inputCode) => {
            this.setData(inputCode, false);
        });
    }
    setData(key, value){
        return this._data[key] = value;
    };
    getData(){
        return this._data;
    };
    isPushed(code){
        if(this._data[code] == undefined) return false;
        return this._data[code];
    };
}
let pState = new pushed_state();

let ticking = false;
$(document).keydown(function(event){
    if(event.keyCode == 32) event.preventDefault();
            //console.log("keydown \""+event.key +"\" : "+ event.keyCode);
            Object.entries(lane_nums).forEach(([inputCode, laneNum]) => {
                if(!pState.isPushed(event.keyCode) && event.keyCode == inputCode){
                    console.log("first keydown of approved Key \""+event.key +"\" : "+ event.keyCode);
                    pState.setData(event.keyCode, true);
                    $("#lane"+laneNum+":not(.pressed)").addClass("pressed");
                    return;
                }
            });
});
$(document).keyup(function(event){
    Object.entries(lane_nums).forEach(([inputCode, laneNum]) => {
        if(event.keyCode == inputCode){
            $("#lane"+laneNum).removeClass("pressed");
            return;
        }
        pState.setData(event.keyCode, false);
    });
    console.log("keyup \""+event.key +"\" : "+ event.keyCode);
});