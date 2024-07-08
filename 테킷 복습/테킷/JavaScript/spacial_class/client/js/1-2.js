

// for, while, do...while

// let i = 0;

// while(i < 10){
//     console.log(i)
//     i++;
// }

// let i = 0;

// for( ; i < 10; ){

//     console.log(i++);

// }


const data = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets",
      hasOwnProperty(){
        return 'a'
      }
    }
  }

// in문 객체 안에 해당 키가 있는지?

console.log('valueOf' in data);

// 자신의 프로퍼티를 가지고 있는지 확인하는 방법
console.log( data.hasOwnProperty('toString') );

console.log( Object.prototype.hasOwnProperty.call(data,'toString') )


console.clear();


// for...in  =>  객체한테 쓸 수 있다

// 왜 써야 하는가?   모든 객체의 key값 | value값을 조회하기 위해

// 'website' in data

// for( const key in data ){
//     const L1 = data[key];
//     if(typeof L1 === 'object'){
//       for(const key in L1){
//         console.log(L1[key])
//       }
//     }
//     console.log(L1)
//   }






const arr = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    }
  ]



// for..in / for..of 몇번반복? 길이만큼

// const str = '안녕하세요 저는 ㅁㅁㅁ입니다'

// for(const value of arr){
//     console.log(value)
// }


// 객체를 ofr...of를 사용하려면,,,, iterable => 객체를 배열로

const user = {
    name:'tiger',
    age:40,
    address:'ㅁㅁ시 ㅁㅁ구 ㅁㅁ동'
}

// const keys = Object.keys(user); // 객체의 키를 모아서 새로운 배열로 변환

const values = Object.values(user) // 객체의 값들을 모아서 새로운 배열로 변환

const entries = Object.entries(user); // 객체의 키와 값들을 모은 하나의 쌍 배열
// [key,value] 을 묶은 [[key,value],[key,value],[key,value]] 새로운 배열로 변환


for(const keyValue of entries){
    
    let key = keyValue[0];

    console.log(key);

}