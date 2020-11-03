let calculateTheTip = () => {
    let receipt = document.getElementById("receipt").value;
    let tip_perc = document.getElementById("tip_perc").value;
    let people_no = document.getElementById("people_no").value;

    if (receipt === null || tip_perc == 0) {
        alert(`You didn't insert all of the values.\n
        Please enter how much you paid, how much you want to tip and how many people are paying.`);
        return;
    }

        if (people_no === "" || people_no <= 1) {
        people_no = 1;
        document.getElementById("each").style.display = "none";
      } else {
        document.getElementById("each").style.display = "block";
      } 

    let total = (receipt*tip_perc) / people_no;

    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    document.getElementById("totalTip").style.display = "inherit";
    document.getElementById("tip").innerHTML = total;

}

document.getElementById("totalTip").style.display = "none"

document.getElementById("calculate").onclick = function() {
    calculateTheTip();

};