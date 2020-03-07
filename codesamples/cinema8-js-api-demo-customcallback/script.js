  
var ivideo = new IVideo('#video', {
    id: '4JyYR9JQ',
    autoplay: false,
    width: 854,
    height: 480,
    //time: 's14',    // e.g. h0m2s10 or s130
   
    onready: function(){            
        //console.log("Duration: " + ivideo.duration());
    },
    onprogress: function(){
        
        //console.log("Completed:" + Math.ceil((ivideo.watchTime() / ivideo.duration()) * 100)+"%");

        //console.log("Current Time: " + ivideo.currentTime());
        //console.log(ivideo.watchTime());
    },
    onplay: function(){
       //console.log('onplay fired');
    },
    onpause: function(){
        //console.log('onpause fired');
    },    
    onend: function(){
        //console.log('onend fired');
        //console.log("Completed:" + Math.ceil((ivideo.watchTime() / ivideo.duration()) * 100)+"%");
    },
    oncustomcallback: function(param){
        console.log(param);
    }
});

