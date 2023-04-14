// // navbar togglemenu start
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}
// // navbar togglemenu end



// ----------------------------------------------------------------------------


      const card = document.querySelector('.card');

      const options = {
        method: 'GET',
        headers: {
            'x-api-key': 'f2c39d307d384c5e88a094d2131fc92b'
        },
      };


      fetch('https://newsapi.org/v2/everything?q=tesla', options)
      .then(response => response.json())
      .then (response => {
        console.log(response);

        const on = response.articles.slice(0, 3);

        on.map((data) => {
          console.log(on);

                      const box = document.createElement('div');
                      box.classList.add('box');
                      card.appendChild(box);

                      // urlToImage
                      const img = document.createElement('img');
                      img.src = `${data.urlToImage}`;
                      box.appendChild(img);

                      // publishedAt "publishedAt
                      const publishedAt = document.createElement('span');
                      publishedAt.textContent = data.publishedAt;                      ;
                      box.appendChild(publishedAt);

                      // title
                      const title = document.createElement('h4');
                      title.textContent = data.title;
                      box.appendChild(title);

                      // description
                      const description = document.createElement('p');
                      description.textContent = data.description;
                      box.appendChild(description);
        })
      })
