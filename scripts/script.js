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

 function addNewCar() {
 	let newItem = document.createElement('div');
 	newItem.classList.add("carsToBuy");
 	document.getElementById("carsList").innerHTML = newItem + `<div id="img-container"> <div class="carousel-inner"> <script type="text/javascript">` + galleryLoad(); + `</script> </div> </div>`;
 }