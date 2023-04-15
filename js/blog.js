// navbar togglemenu start
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}
// // navbar togglemenu end

// const card = document.querySelector('.startup-card');
const card = document.querySelector('.startup-card');
const search = document.querySelector('.search');
const movieList = document.querySelector('.movies-list');
const apiKey = "7QXhZeBWzOyZBVz-82unyrC4EwCTTdMaHYZYn5AJfyo";
let url = 'https://api.newscatcherapi.com/v2/search?q=Business';

let currentPage = 1;

async function fetchData () {

  if (!search.value) {
    url = `https://api.newscatcherapi.com/v2/search?q=All&page=${currentPage}`
  } else {
    url = `https://api.newscatcherapi.com/v2/search?q=${search.value}`
  }

  try {
    const response = await fetch(url,{
      method: "GET",
          headers: {
              "x-api-key": apiKey
          }
    });
    const data = await response.json();




    const sliceData = data.articles.slice(5, 10)

    sliceData.map((data) => {

                console.log(response);


                    const box = document.createElement('div');
                    box.classList.add('businessBox');
                    card.appendChild(box);


                    // imgdiv
                    const imgBox = document.createElement('div');
                    imgBox.classList.add('img-boxs');
                    box.appendChild(imgBox);

                    const itemBox = document.createElement('div');
                    itemBox.classList.add('item-boxs');
                    box.appendChild(itemBox);

                    // urlToImage
                    const img = document.createElement('img');
                    img.src = `${data.media}`;
                    imgBox.appendChild(img);

                    const name = document.createElement('h1');
                    if (!search.value) {
                      name.textContent = 'BUSINESS'
                    } else {
                      name.textContent = search.value;

                    }
                    itemBox.appendChild(name);

                    // title
                    const title = document.createElement('h4');
                    title.textContent = data.title;
                    itemBox.appendChild(title);

                    // // description
                    const excerpt = document.createElement('p');
                    excerpt.textContent = data.title;
                    itemBox.appendChild(excerpt);

                    movieList.appendChild(box)
  })

  } catch (error) {
    console.log(error);
  }
}

fetchData();

const searchBtn = document.querySelector('.btn');

searchBtn.addEventListener('click', () => {
  console.log(search.value);
  movieList.innerHTML = '';
  fetchData();
})



// // ----------------------------------------------------------------------------

// const apiKey = "D7ZMrkjarVWhCfd67Ri9XI2ftbhQVcUeK-ao6NLXcEA";
// const card = document.querySelector('.startup-card');
// const search = document.querySelector('.search');

// const url = 'https://api.newscatcherapi.com/v2/search?q=Business';





// const options = {
//   method: 'GET',
//   headers: {
//       'x-api-key': 'D7ZMrkjarVWhCfd67Ri9XI2ftbhQVcUeK-ao6NLXcEA'
//   },
// };

// let page = 1;
// function getData () {


//   if (!search.value) {
//     url = `https://api.newscatcherapi.com/v2/search?q=All&page=${page}`;
//   } else {
//       url = `https://api.newscatcherapi.com/v2/search?q=${search.value}`;
//   };





// fetch(url, options)
// .then(response => response.json())
// .then (response => {
//   response.articles.map((data) => {

//     console.log(response);




//                 const box = document.createElement('div');
//                 box.classList.add('businessBox');
//                 card.appendChild(box);


//                 // imgdiv
//                 const imgBox = document.createElement('div');
//                 imgBox.classList.add('img-boxs');
//                 box.appendChild(imgBox);

//                 const itemBox = document.createElement('div');
//                 itemBox.classList.add('item-boxs');
//                 box.appendChild(itemBox);

//                 // urlToImage
//                 const img = document.createElement('img');
//                 img.src = `${data.img}`;
//                 imgBox.appendChild(img);

//                 const name = document.createElement('h1');
//                 name.textContent = "business";
//                 itemBox.appendChild(name);

//                 // title
//                 const title = document.createElement('h4');
//                 title.textContent = data.title;
//                 itemBox.appendChild(title);

//                 // // description
//                 const excerpt = document.createElement('p');
//                 excerpt.textContent = data.excerpt;
//                 itemBox.appendChild(excerpt);
//         })
// })

// }

// getData();

// const searchBtn = document.querySelector('.btn');
// searchBtn.addEventListener('click', () => {
//   getData();
// })










// // ----------------------------------------------------------------------------






// const card = document.querySelector('.startup-card');

// const url = 'https://newsapi.org/v2/everything?q=tesla';

// const options = {
//   method: 'GET',
//   headers: {
//       'x-api-key': 'f2c39d307d384c5e88a094d2131fc92b'
//   },
// };


//   fetch(url, options)
//       .then(response => response.json())
//       .then (response => {
//         response.articles.map((data) => {

//           console.log(response);



//               const box = document.createElement('div');
//               box.classList.add('businessBox');
//               card.appendChild(box);


//               // imgdiv
//               const imgBox = document.createElement('div');
//               imgBox.classList.add('img-boxs');
//               box.appendChild(imgBox);

//               const itemBox = document.createElement('div');
//               itemBox.classList.add('item-boxs');
//               box.appendChild(itemBox);

//               // urlToImage
//               const img = document.createElement('img');
//               img.src = `${data.img}`;
//               imgBox.appendChild(img);

//               const name = document.createElement('h1');
//               name.textContent = "business";
//               itemBox.appendChild(name);

//               // title
//               const title = document.createElement('h4');
//               title.textContent = data.title;
//               itemBox.appendChild(title);

//               // // description
//               const excerpt = document.createElement('p');
//               excerpt.textContent = data.excerpt;
//               itemBox.appendChild(excerpt);
//         })
// })























// // ----------------------------------------------------------------------------
