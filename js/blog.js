// navbar togglemenu start
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}
// // navbar togglemenu end



// ----------------------------------------------------------------------------


const card = document.querySelector('.startup-card');

const url = 'https://api.newscatcherapi.com/v2/search?q=Tesla';

const options = {
  method: 'GET',
  headers: {
      'x-api-key': 'D7ZMrkjarVWhCfd67Ri9XI2ftbhQVcUeK-ao6NLXcEA'
  },
};


  fetch(url, options)
      .then(response => response.json())
      .then (response => {
        response.articles.map((data) => {

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
              img.src = `${data.img}`;
              imgBox.appendChild(img);

              const name = document.createElement('h1');
              name.textContent = "business";
              itemBox.appendChild(name);

              // title
              const title = document.createElement('h4');
              title.textContent = data.title;
              itemBox.appendChild(title);

              // // description
              const excerpt = document.createElement('p');
              excerpt.textContent = data.excerpt;
              itemBox.appendChild(excerpt);
        })
})























// ----------------------------------------------------------------------------


// const imagesUrl = 'https://image.tmdb.org/t/p/w500';
// let url = 'https://api.themoviedb.org/3/discover/movie?api_key=c1ba5d7054ad4225561ffacb783be3c6';
// const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=c1ba5d7054ad4225561ffacb783be3c6&query=';



// const startupCard = document.querySelector('.startup-card');
// const fragment = document.createDocumentFragment();
// const moviesList = document.querySelector('.movies-list');

// startupCard.appendChild(moviesList);


// const search = document.querySelector('.search');
// const btn = document.querySelector('.btn');

// async function fetchData() {

//     const searchTerm = search.value;

//     if (searchTerm) {
//         url = `${searchUrl}${searchTerm}`
//     } else {
//         url = 'https://api.themoviedb.org/3/discover/movie?api_key=c1ba5d7054ad4225561ffacb783be3c6'
//     }

//     try {
//         const response = await fetch(url);
//         const data = await response.json();


//         moviesList.innerHTML = '';

//         data.results.map((movie) => {

//           const dataBox = document.createElement('div');
//           dataBox.classList.add('dataBox')

//             const image = document.createElement('img');
//             image.src = `${imagesUrl}${movie.backdrop_path}`;
//             image.alt = movie.title;

//             const title = document.createElement('h2');
//             title.textContent = movie.title;

//             dataBox.appendChild(image);
//             dataBox.appendChild(title);
//             moviesList.appendChild(dataBox);

//             console.log(movie);
//         })

//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchData();

// btn.addEventListener('click', () => {
//     fetchData();
// })










// ------------------------------------------------
// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=dc4904d30bb24aceae99e00148389502

// const card = document.querySelector('.startup-card');

// let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=dc4904d30bb24aceae99e00148389502';
// const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=dc4904d30bb24aceae99e00148389502&query=';


// // const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business';

// const options = {
//   method: 'GET',
//   headers: {
//       'x-api-key': 'dc4904d30bb24aceae99e00148389502'
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
//               img.src = `${data.urlToImage}`;
//               imgBox.appendChild(img);

//               const name = document.createElement('h1');
//               name.textContent = "business";
//               itemBox.appendChild(name);

//               // title
//               const author = document.createElement('h4');
//               author.textContent = data.author;
//               itemBox.appendChild(author);

//               // // description
//               const content = document.createElement('p');
//               content.textContent = data.content;
//               itemBox.appendChild(content);
//         })
// })
