async function galleryLoad() {
  const response = await fetch('https://backend.daviva.lt/API/InformacijaTestui');
  const images = await response.json();

  
  document.getElementById("info").innerHTML = `<p id="car-brand">` + images.marke + `</p><p id="car-model">` + images.modelis + `</p><p id="year">` + images.metai + `</p><p id="price">` + images.kaina + " &#8364; </p>";
  let image1 = document.createElement('div');
 
  for (let i = 0; i < 4; i++){
   image1.classList.add('item');
 //  if(i = 1){
	// 	image1.classList.add(' active');
	// }
  image1.innerHTML = `<img src="${images.nuotraukos[i]}" alt="${images.marke}"/>`;
  document.getElementById("img-container").appendChild(image1);
	}

}
var Num = 1;

async function addNewCar() {
  const response = await fetch(
    "https://backend.daviva.lt/API/InformacijaTestui"
  );
  const car = await response.json();
  let carousel = "myCarousel" + Num;
  let brand = `<p id="car-brand">${car.marke}</p>`;
  let model = `<p id="car-model">Modelis: ${car.modelis}</p>`;
  let year = `<p id="year">Metai: ${car.metai}</p>`;
  let price = `<p id="price">${car.kaina}&#8364;</p>`;
  $("#carsToBuy").append(
    `<div class="allInfo"><div id="${carousel}" class="carousel slide" data-ride="carousel"><div class="carousel-inner"></div></div>` + 
    `<div id="info">${brand}${model}${year}${price}</div></div></div>`
  );

  for (let i = 0; i < car.nuotraukos.length; i++) {
    $(`<img src="${car.nuotraukos[i]}" alt="${car.modelis}"/>`).appendTo(
      $("div.carousel-inner").last()
    );
    $("img")
      .last()
      .wrap('<div class="item"></div>');
  }
  $("div.carousel-inner")
    .last()
    .after(
      `<a class="left carousel-control" href="#${carousel}" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#${carousel}" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span><span class="sr-only">Next</span></a>`
    )
    .children()
    .first()
    .addClass("active");

  console.log(Num);
  Num++;
}