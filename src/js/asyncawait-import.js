// Global app controller
// import hello from './test-export';

// import { plus, multiply } from "./test-export";
// import { plus as p, multiply as m} from "./test-export";
// import * as calc from "./test-export";
// const a = 25;
// console.log(calc);


// async await
// async function getPosts() {
//     try {
//         const response1 = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const response2 = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data1 = await response1.json();
//         const data2 = await response2.json();
//
//         if (response1.status === 404) {
//             throw new Error('Sataus 404');
//         }
//         if (response1.status === 401) {
//             throw new Error('Sataus 401');
//         }
//         if (response1.status === 200) {
//             return {posts: data1, users: data2};
//         }
//
//     } catch (error) {
//         return Promise.reject(error);
//     }
//
// }
// getPosts()
//     .then(posts => {
//         console.log(posts);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// async function getReciples(query) {
//     const key = 'cb64d3daa1f96f63188e0232c1782d32';
//
//     try {
//         const res = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${key}&q=${query}`);
//         const data = await res.json();
//         console.log(data);
//         } catch (error) {
//         console.log(error);
//     }
// }
// getReciples('pizza');