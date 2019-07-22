let lane_nums = {
    87: 1,
    83: 2,
    32: 3,
    75: 4,
    79: 5
}
$(document).keydown(function(event){
    Object.entries(lane_nums).forEach(([inputCode, laneNum]) => {
        if(event.keyCode == inputCode){
            event.preventDefault();
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
    });
});