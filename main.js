





function Main(input) {
  const input1 = input.trim();
  const input2 = input1.split(" ");

  console.log(input2)



}

  var input = "9 45000";
  Main(input);









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