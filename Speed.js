/*You are given a floating-point number hour, representing the amount of time you have to reach the office. To commute to the office, you must take n trains in sequential order. You are also given an integer array dist of length n, where dist[i] describes the distance (in kilometers) of the ith train ride.
*/
var minSpeedOnTime = function(dist, hour) {
    // Maximum speed completes one train per hour - exit early if we can't achieve this
    if(dist.length > Math.ceil(hour)) return -1;
    
    const totalTime = (speed) => {
        let sum = 0;
        for(i = 0; i < dist.length; i++) {
            if(i === dist.length-1) sum += (dist[i] / speed)
            else sum += Math.ceil(dist[i] / speed);
        }
        return sum;
    }
    
    let left = 1;
	// We could calculate the real maximum value this way on a per-execution basis
	// but it's faster to just derive the maximum value from the question constraints
    // let right = Math.max(...dist) * 100;
    let right = 10000000;
    
    while(left < right) {
        let speed = left + Math.floor((right-left) /2);
        if(totalTime(speed) > hour) {
            left = speed + 1;
        } else {
            right = speed;
        }
    }
    return left;
};
