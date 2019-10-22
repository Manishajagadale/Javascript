window.onload = function () {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        console.log(http);

    };
    http.open("GET", "data/tweets.json", true);
    http.send();
    //jQuery method 
    $.get("data/tweets.json", function (data) {
        console.log(data);

    });
    console.log("test");

};
