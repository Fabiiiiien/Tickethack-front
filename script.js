
document.querySelector ('.btn-search').addEventListener('click',function (){
 const departure = document.querySelector ('.Departure')
 const arrival = document.querySelector ('.Arrival')
 const date = document.querySelector ('.Date')

    
    fetch(`http://localhost:3001/tickets/${departure.value}/${arrival.value}/${date.value}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      for (let trajet of data ){
        
        document.querySelector('.content-right').innerHTML += `
        <div class="trip-result">
           <span>${trajet.departure} > ${trajet.arrival}</span> 
           <span>${trajet.date.slice(11,16)}</span>
           <span>${trajet.price}€</span>
        </div>` }
      
        document.querySelector('.logo-train').style.display='none'
        document.querySelector('.trait').style.display='none'
        document.querySelector('.future').style.display='none'
  
    }); 

    departure.value =''
    arrival.value =''
    date.value = ''


})

