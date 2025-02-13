/*[Async function ]
- Async function is a function that returns a promise.

*/

// //code
// async function myFunction() {//async function always returns a Promise.
//     throw "Error";
//     return "Hello";
// }
// myFunction().then((result)=>{

//     console.log(result);
//     console.log(myFunction());
// })
// .catch((err)=>{
//     console.log(err);
//     console.log(myFunction());
// });







/*[await keyword ]
- Use await inside an async function to pause execution until a Promise resolves.
- The await keyword can only be used inside an async function.

*/

// //code
// function getnum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         let num = Math.floor(Math.random()*10)+1;
//         console.log(num);
//             resolve();
//         },2000);
//     });
// }

// async function demo(){
//     await getnum();
//     await getnum(); 
//     await getnum();
//     await getnum();
//     getnum();
// }
// demo();




// //code 
// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve) => {  // Step 1: Create a Promise
//         setTimeout(() => {  // Step 2: Wait for delay
//             h1.style.color = color;  // Step 3: Change color
//             resolve();  // Step 4: Tell JavaScript "I'm done, move to next step!"
//         }, delay);
//     });
// }
// async function colorAll() {
//     await changeColor('red', 1000); //iske baad hi next line execute hogi
//     await changeColor('green', 1000);  //iske baad hi next line execute hogi
//     await changeColor('blue', 1000);  
//     await changeColor('orange', 1000);
//     await changeColor('purple', 1000);
//     await changeColor('yellow', 1000);

// }
// colorAll();








/*[ api in js]
- API stands for Application Programming Interface.
-web api is use to get data from server.


*/

//code 






/*[ acessing data from api]
-api se jo data aata hai vo string format me hota hai.to usko convert karna padta hai.

-api se jo data aata hai vo json format me hota hai.to usko convert karna padta hai.

-to convert json data to js object we use JSON.parse(data) method.

-to convert js object to json data we use JSON.stringify(data) method.
*/

// //code
// //json to js object
// let jsonres='{"fact":"The most expensive cat was an Asian Leopard cat (ALC)-Domestic Shorthair (DSH) hybrid named Zeus. Zeus, who is 90% ALC and 10% DSH, has an asking price of \u00a3100,000 ($154,000).","length":175}';
// let obj=JSON.parse(jsonres);
// console.log(obj.fact);
// console.log(obj.length);//175

// //js object to json
// let data = { name: "John", age: 30, city: "New York" };
// let json = JSON.stringify(data);
// console.log(json);//{"name":"John","age":30,"city":"New York"}







/*[ testing api request ]
-tools required to test api request are postman,hoopscotch(we use this to test api request).

-
*/

//code:no code




/*[AJAX stands for Asynchronous JavaScript And XML.]
-

*/

//code:no code






/*[http verbs ]
-get,post,put,delete.
*/

//code




/*[status code ] 
200: OK,404: NOT FOUND,500: INTERNAL SERVER ERROR
*/

//code







/*[ adding information in url]
-A query string is a way to send extra information in a URL using key-value pairs. It starts with ? and
 separates multiple values with &.

-https://example.com/user?id=1&name=John&age=25 here key is id,name,age and value is 1,John,25.

*/

//code





/*[ https headers]
-
*/

//code





/*[api request using fetch]
-fetch() method is used to make api request.
-fetch() method returns a promise.


*/

// //code
// let url="https://catfact.ninja/fact";

// fetch(url)
// .then((resp)=>{
//     console.log(resp); 
//     //console.log(resp.json());//it return a promise .
//     resp.json().then((data)=>{//to get json data .
//         console.log(data);
//         console.log(data.fact);
        
//     })
// })

// .catch((err)=>{
//     console.log(err);
// });








/*[fetch with async await]


*/

// //code
// let url="https://catfact.ninja/fact";

// async function getdata(){
//     try{
//         let resp=await fetch(url);
//         let data=await resp.json();
//         console.log(data);
//         console.log(data.fact);
//     }catch(err){
//         console.log(err);
//     }
// }
// getdata();



/*[ ]

*/

//code

/*[ ]

*/

//code

/*[ ]

*/

//code

/*[ ]

*/

//code

