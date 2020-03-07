
    



// Setup
var player = new Cinema8Player("#video", {
    id: "YVX3wMX4",
    style: "position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; width: 100%; height: 100% ;border: 0;",
    //id: "vD564AX5",
    //authToken: "751963c10652935de6b94670de98833c430dc83c", // loginAsWithUsername servisinden dönen token (Hangi kullanıcının izlediğini tutabilmek için, authToken girilmezse izleyen kişi anonymous olarak görünür) 
    onready: function(){
        console.log("onready fired");
    },
    onplay: function(){
       console.log("onplay fired");
    },
    onpause: function(){
        console.log("onpause fired");
    },
    onprogress: function(){
        console.log("onprogress fired");
    },
    onend: function(){
        console.log("onend fired");
    }
});