const display = document.querySelector(".display");
var total = 0;
var last;
var op = 0;

//----------------------------------------
//
//ON-SCREEN CALCULATOR
//
//----------------------------------------
document
  .querySelector(".calculator-buttons")
  .addEventListener("click", function (event) {
    //if(event.target.innerText == 1)
    //console.log(event.target.innerText)
    
    //Checks to see what button was pressed on the calculator
    switch (event.target.innerText) {
      case "1":
        console.log(1);
        display.innerHTML = parseInt((display.innerHTML += 1));
        break;
      case "2":
        console.log(2);
        display.innerHTML = parseInt((display.innerHTML += 2));
        break;
      case "3":
        console.log(3);
        display.innerHTML = parseInt((display.innerHTML += 3));
        break;
      case "4":
        console.log(4);
        display.innerHTML = parseInt((display.innerHTML += 4));
        break;
      case "5":
        console.log(5);
        display.innerHTML = parseInt((display.innerHTML += 5));
        break;
      case "6":
        console.log(6);
        display.innerHTML = parseInt((display.innerHTML += 6));
        break;
      case "7":
        console.log(7);
        display.innerHTML = parseInt((display.innerHTML += 7));
        break;
      case "8":
        console.log(8);
        display.innerHTML = parseInt((display.innerHTML += 8));
        break;
      case "9":
        console.log(9);
        display.innerHTML = parseInt((display.innerHTML += 9));
        break;
      case "0":
        console.log(0);
        display.innerHTML = parseInt((display.innerHTML += 0));
        break;
      
      //For all operations, check to see what operation. Then check to see if last number is null.
        //If yes: make display the last and total. If no: set last to current, total (operation) 
        //last. Then set current operation.
      case "+":
        console.log("+");
        if (last == null) {
          total = parseInt(display.innerHTML);
          last = parseInt(display.innerHTML);
        } else {
          switch (op) {
            case 1:
              last = parseInt(display.innerHTML);
              total += last;
              break;
            case 2:
              last = parseInt(display.innerHTML);
              total -= last;
              break;
            case 3:
              last = parseInt(display.innerHTML);
              total *= last;
              break;
            case 4:
              last = parseInt(display.innerHTML);
              total += last;
              break;
          }
          //last = parseInt(display.innerHTML);
          //total += last;
        }
        display.innerHTML = 0;
        op = 1;
        console.log("TOTAL" + total);
        break;
      case "÷":
        console.log("/");
        if (last == null) {
          total = parseInt(display.innerHTML);
          last = parseInt(display.innerHTML);
        } else {
          switch (op) {
            case 1:
              last = parseInt(display.innerHTML);
              total += last;
              break;
            case 2:
              last = parseInt(display.innerHTML);
              total -= last;
              break;

            case 3:
              last = parseInt(display.innerHTML);
              total *= last;
              break;
            case 4:
              last = parseInt(display.innerHTML);
              total += last;
              break;
          }

          //last = parseInt(display.innerHTML);
          //total /= last;
        }
        display.innerHTML = 0;
        op = 4;
        break;
      case "×":
        console.log("*");
        if (last == null) {
          total = parseInt(display.innerHTML);
          last = parseInt(display.innerHTML);
        } else {
          switch (op) {
            case 1:
              last = parseInt(display.innerHTML);
              total += last;
              break;
            case 2:
              last = parseInt(display.innerHTML);
              total -= last;
              break;

            case 3:
              last = parseInt(display.innerHTML);
              total *= last;
              break;
            case 4:
              last = parseInt(display.innerHTML);
              total += last;
              break;
          }
          //last = parseInt(display.innerHTML);
          //total *= last;
        }
        display.innerHTML = 0;
        op = 3;

        console.log("TOTAL" + total);
        break;
      case "−":
        console.log("-");
        if (last == null) {
          total = parseInt(display.innerHTML);
          last = parseInt(display.innerHTML);
        } else {
          switch (op) {
            case 1:
              last = parseInt(display.innerHTML);
              total += last;
              break;
            case 2:
              last = parseInt(display.innerHTML);
              total -= last;
              break;

            case 3:
              last = parseInt(display.innerHTML);
              total *= last;
              break;
            case 4:
              last = parseInt(display.innerHTML);
              total += last;
              break;
          }
          //last = parseInt(display.innerHTML);
          //total -= last;
        }
        display.innerHTML = 0;
        op = 2;
        break;
      case "=":
        if (op == 1) {
          last = parseInt(display.innerHTML);
          total += last;
          //total += parseInt(display.innerHTML);
          display.innerHTML = total;
          console.log("+=");
        } else if (op == 2) {
          last = parseInt(display.innerHTML);
          total -= last;
          //total -= parseInt(display.innerHTML);
          display.innerHTML = total;
          console.log("-=");
        } else if (op == 3) {
          last = parseInt(display.innerHTML);
          total *= last;
          //total *= parseInt(display.innerHTML);
          display.innerHTML = total;
          console.log("*=");
        } else {
          last = parseInt(display.innerHTML);
          total /= last;
          //total /= parseInt(display.innerHTML);
          display.innerHTML = total;
          console.log("/=");
        }
        op = 0;
        console.log(total);
        break;
      case "←":
        console.log("delete");
        display.innerHTML = parseInt(display.innerHTML / 10);
        break;
      case "C":
        console.log("clear");
        display.innerHTML = 0;
        total = 0;
        last = null;
    }
  });

//----------------------------------------
//
//KEYBOARD INPUT
//
//----------------------------------------
document.addEventListener("keydown", (event) => {
  console.log(event.key);
  switch (event.key) {
    case "1":
      console.log(1);
      display.innerHTML = parseInt((display.innerHTML += 1));
      break;
    case "2":
      console.log(2);
      display.innerHTML = parseInt((display.innerHTML += 2));
      break;
    case "3":
      console.log(3);
      display.innerHTML = parseInt((display.innerHTML += 3));
      break;
    case "4":
      console.log(4);
      display.innerHTML = parseInt((display.innerHTML += 4));
      break;
    case "5":
      console.log(5);
      display.innerHTML = parseInt((display.innerHTML += 5));
      break;
    case "6":
      console.log(6);
      display.innerHTML = parseInt((display.innerHTML += 6));
      break;
    case "7":
      console.log(7);
      display.innerHTML = parseInt((display.innerHTML += 7));
      break;
    case "8":
      console.log(8);
      display.innerHTML = parseInt((display.innerHTML += 8));
      break;
    case "9":
      console.log(9);
      display.innerHTML = parseInt((display.innerHTML += 9));
      break;
    case "0":
      console.log(0);
      display.innerHTML = parseInt((display.innerHTML += 0));
      break;
    case "a":
      console.log("+");
      if (last == null) {
        total = parseInt(display.innerHTML);
        last = parseInt(display.innerHTML);
      } else {
        switch (op) {
          case 1:
            last = parseInt(display.innerHTML);
            total += last;
            break;
          case 2:
            last = parseInt(display.innerHTML);
            total -= last;
            break;

          case 3:
            last = parseInt(display.innerHTML);
            total *= last;
            break;
          case 4:
            last = parseInt(display.innerHTML);
            total += last;
            break;
        }
        //last = parseInt(display.innerHTML);
        //total += last;
      }
      display.innerHTML = 0;
      op = 1;
      console.log("TOTAL" + total);
      break;
    case "d":
      console.log("/");
      if (last == null) {
        total = parseInt(display.innerHTML);
        last = parseInt(display.innerHTML);
      } else {
        switch (op) {
          case 1:
            last = parseInt(display.innerHTML);
            total += last;
            break;
          case 2:
            last = parseInt(display.innerHTML);
            total -= last;
            break;

          case 3:
            last = parseInt(display.innerHTML);
            total *= last;
            break;
          case 4:
            last = parseInt(display.innerHTML);
            total += last;
            break;
        }

        //last = parseInt(display.innerHTML);
        //total /= last;
      }
      display.innerHTML = 0;
      op = 4;
      break;
    case "x":
      console.log("*");
      if (last == null) {
        total = parseInt(display.innerHTML);
        last = parseInt(display.innerHTML);
      } else {
        switch (op) {
          case 1:
            last = parseInt(display.innerHTML);
            total += last;
            break;
          case 2:
            last = parseInt(display.innerHTML);
            total -= last;
            break;

          case 3:
            last = parseInt(display.innerHTML);
            total *= last;
            break;
          case 4:
            last = parseInt(display.innerHTML);
            total += last;
            break;
        }
        //last = parseInt(display.innerHTML);
        //total *= last;
      }
      display.innerHTML = 0;
      op = 3;

      console.log("TOTAL" + total);
      break;
    case "s":
      console.log("-");
      if (last == null) {
        total = parseInt(display.innerHTML);
        last = parseInt(display.innerHTML);
      } else {
        switch (op) {
          case 1:
            last = parseInt(display.innerHTML);
            total += last;
            break;
          case 2:
            last = parseInt(display.innerHTML);
            total -= last;
            break;

          case 3:
            last = parseInt(display.innerHTML);
            total *= last;
            break;
          case 4:
            last = parseInt(display.innerHTML);
            total += last;
            break;
        }
        //last = parseInt(display.innerHTML);
        //total -= last;
      }
      display.innerHTML = 0;
      op = 2;
      break;
    case "Enter":
      if (op == 1) {
        last = parseInt(display.innerHTML);
        total += last;
        //total += parseInt(display.innerHTML);
        display.innerHTML = total;
        console.log("+=");
      } else if (op == 2) {
        last = parseInt(display.innerHTML);
        total -= last;
        //total -= parseInt(display.innerHTML);
        display.innerHTML = total;
        console.log("-=");
      } else if (op == 3) {
        last = parseInt(display.innerHTML);
        total *= last;
        //total *= parseInt(display.innerHTML);
        display.innerHTML = total;
        console.log("*=");
      } else {
        last = parseInt(display.innerHTML);
        total /= last;
        //total /= parseInt(display.innerHTML);
        display.innerHTML = total;
        console.log("/=");
      }
      op = 0;
      console.log(total);
      break;
    case "Backspace":
      console.log("delete");
      display.innerHTML = parseInt(display.innerHTML / 10);
      break;
    case "Escape":
      console.log("clear");
      display.innerHTML = 0;
      total = 0;
      last = null;
  }
});
