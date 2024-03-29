
function Main(input) {
    const input1 = input.split("\n");
    const input2 = Number(input1.shift());
    let currentTime = 0;
    let currentX = 0;
    let currentY = 0;

    for(index = 0 ; index < input2; index++){
      const inputArr = input1[index].trim().split(" ");
      const [time,x,y] = inputArr;
      const remainingTime = time - currentTime;
      const distance = Math.abs(currentX - x) + Math.abs(currentY - y);
      currentTime = time;
      currentX = x;
      currentY = y;
      if (remainingTime < distance || (remainingTime - distance) % 2 !== 0) {
        return console.log("No");
      }
    }

    return console.log("Yes");
  }
  
  
  Main(require("fs").readFileSync("/dev/stdin", "utf8")); // これは必ず必要な呪文です
  
  // var input = "2\n3 1 2 \n6 1 1";
  // Main(input);






// function Main(input) {
//   let input1 = input.trim();
//   let hakutyumu = input1.replace(/eraser/g, "");
//   hakutyumu = hakutyumu.replace(/erase/g, "");
//   hakutyumu = hakutyumu.replace(/dreamer/g, "");
//   hakutyumu = hakutyumu.replace(/dream/g, "");
//    if(hakutyumu === ""){
//     console.log("YES");
//    }else{
//     console.log("NO");
//    }

// }


// Main(require("fs").readFileSync("/dev/stdin", "utf8")); // これは必ず必要な呪文です

// var input = "dreameraser";
//   Main(input);




// function Main(input) {
//   const input1 = input.trim();
//   const input2 = input1.split(" ");
//   const input3 = input2.map((data)=>{return Number(data);});
//   let osatuArr = [];

//   for(let a = 0; a <= input3[0];a++){
//     for(let b = 0; a+b <= input3[0];b++){
//       const c = input3[0] - a - b;
//       const total = 10000 * a + 5000 * b + 1000 * c;
//       if(total === input3[1] && input3[0] === a + b + c){
//         osatuArr = [a,b,c];
//         break;
//       }
//     }
//   }

//   if(osatuArr.length === 0){
//     osatuArr = [-1,-1,-1];
//   }

//   console.log(osatuArr.join(' '));

// }
//   var input = "20 196000";
//   Main(input);


//   for(let a = 0; a <= input3[0];a++){
//     for(let b = 0; b <= input3[0];b++){
//       for(let c = 0; c <= input3[0];c++){
//         if(input3[1] === 10000 * c + 5000 * b + 1000 * a && input3[0] === a + b + c){
//           osatuArr=[c,b,a];
//           break;
//         }
//       }
//     }
//   }

//   if(osatuArr.length===0){
//     osatuArr=[-1,-1,-1];
//   }

//   console.log(osatuArr.join(' '))

// }





// function Main(input) {
//   const input1 = input.trim();
//   const dataArr = input1.split("\n");
//   const inputArr = dataArr.shift();
//   // dataArr = dataArr.map((data)=>{return Number(data);});
//   const kagamimoti = dataArr.filter((element, index) => {
//     return dataArr.indexOf(element) == index;
//   }) 
//   // console.log(kagamimoti)
//   console.log(kagamimoti.length);

// }

//   var input = "7\n50\n30\n50\n100\n50\n80\n30";
//   Main(input);







// function Main(input) {
//   let dataArr = input.split("\n");
//   let inputArr = dataArr.shift();
//   dataArr = dataArr.map((data)=>{return Number(data);});
//   const kagamimoti = Array.from(new Set(dataArr));
//   console.log(kagamimoti.length);

// }

//   var input = "4\n10\n8\n8\n6";
//   Main(input);



// //*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8")); // これは必ず必要な呪文です




// function Main(input) {
//   const number = input.split("\n");
//   const inputArr = number[1].split(" ");
//   let maxIndex = 0;
//   let Alice = 0;
//   let Bob = 0;
//   const dataArr = inputArr.map((data)=>{return Number(data);});

//   for(let a = 0 ; number[0]/2 > a ; a++){
//   maxIndex = dataArr.indexOf(Math.max(...dataArr));
//   Alice += dataArr[maxIndex];
//   dataArr.splice(maxIndex,1);
//   if(dataArr.length !== 0){
//   maxIndex = dataArr.indexOf(Math.max(...dataArr));
//   Bob += dataArr[maxIndex];
//   dataArr.splice(maxIndex,1);
// }
// }

// console.log(Alice-Bob);

// }

//   var input = "4\n20 18 2 18";
//   Main(input);













// function Main(input) {
//   const inputArr = input.split(" ");
//   let count = 0;
//   let num = 0;
//   let sumdata = 0;

//   for(let a = 0; a<=inputArr[0];a++){
//     let intArr = String(a).split("");
//     sumdata = a;
//     num = 0;
//     intArr.forEach(data => {
//       num = Number(data) + num;
//     });
//     // console.log(num);
//     if(num >=  inputArr[1]&& num <=inputArr[2]){
//       count += sumdata;
//     }
//   }
//   console.log(count);
// }

//   var input = "100 4 16";
//   Main(input);











// function Main(input) {
//   const inputArr = input.split("\n");
//   const data = parseInt(inputArr[3]);
//   let count = 0;

//   for(let a = 0; a <= inputArr[0];a++){// 500円玉の計算
//     for(let b = 0; b <= inputArr[1];b++){// 100円玉の計算
//         for(let c = 0; c <= inputArr[2];c++){// 50円玉の計算
//                 if(data===50*c+100*b+500*a){
//                 count++;
//                 }
//             }  
//         }
//     }

//   console.log(count);
// }

//   var input = "2\n2\n2\n100";
//   Main(input);








// function Main(input) {
//   const inputArr = input.split("\n");
//   const data = parseInt(inputArr[3]);
//   let count = 0;

//   for(let a = 0; a <= inputArr[0];a++){// 500円玉の計算
//     for(let b = 0; b <= inputArr[1];b++){// 100円玉の計算
//         for(let c = 0; c <= inputArr[2];c++){// 50円玉の計算
//                 if(data===50*c+100*b+500*a){
//                 count++;
//                 }
//             }  
//         }
//     }

//   console.log(count);
// }

//   var input = "2\n2\n2\n100";
//   Main(input);


// function Main(input) {
//   let inputdata = input.split("\n")
//   let arr = inputdata[1].split(" ");
//   let check = true;
//   let count = -1;

// while(check){
//   arr=arr.map((data)=>{
//     if(data%2===0){
//     return data/2
//   }else{
//     check = false;
//   }
//   });
//   count++

// }
//   console.log(count);
// }

//   var input = "3\n5 6 8 10";
//   Main(input);
















// function Main(input) {
//   let arr = input[1].split(" ");
//   let check = true;
//   let count = -1;

//   do {
//     arr.forEach((data,index) => {
//       if(data%2===0){
//         arr[index]=data/2;
//       }else{
//         check = false;
//       }
//     });
//     count++;
//   } while (check);

// console.log(count);

// }

//   var input = ["3","382253568 723152896 37802240 379425024 404894720 471526144"];
//   Main(input);

// function Main(input) {
//   const arr = input.split("");
//   let count = 0;
//   arr.forEach(function(data) {
//     if(data==="1"){
//       count +=1;
//     }
//   });
//   console.log(count);
//   }

//   // Main(require("fs").readFileSync("/dev/stdin", "utf8")); // これは必ず必要な呪文です

//   var input = ["011"]
//   Main(input)
 


// function Main(input) {
// 	const data = ( input[0].match( /1/g ) || [] ).length;
//   console.log(data);
// }
// //*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8")); // これは必ず必要な呪文です








// function Main(input) {
//   var count = ( input[0].match( /1/g ) || [] ).length;
//   console.log(count);
//   }

//   Main(require("fs").readFileSync("/dev/stdin", "utf8")); // これは必ず必要な呪文です

//   var input = ["000"]
//   main(input)
 
  // main(require('fs').readFileSync('/dev/stdin', 'utf8'))