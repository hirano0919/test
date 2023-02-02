for(var star1 = 0; star1 < 5; star1++){
    for(var star2 = 0; star2 <= star1; star2++){ //余計に計算するよりこっちのほうが速い(star1+1に比べて)       
        document.write("★");
    }
    document.write("<br>");
}