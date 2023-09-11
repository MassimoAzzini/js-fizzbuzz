// creo una variante del contenitore che terrà tutti i box
const containerBox = document.querySelector('.content')

// creo un ciclo per creare la numerazione da 1 a 100 e creo il div con classe box per tutti
for(let i = 0; i < 100; i++){
  let box = document.createElement('div');
  console.log(i + 1);
  box.classList.add('box');
  box.append(i + 1);

  // creo delle condizioni per i multipli di 3 & 5, di 3, di 5 in questo ordine per dare priorita alla classe 3 & 5 
  if((!((i + 1) % 3)) & (!((i + 1) % 5))){
    
    box.classList.add('fizz-buzz');
    box.innerHTML = ('fizzbuzz');

  }else if(!((i + 1) % 3)){

    box.classList.add('fizz');
    box.innerHTML = ('fizz');

  }else if(!((i + 1) % 5)){

    box.classList.add('buzz');
    box.innerHTML = ('buzz');

  }

  containerBox.append(box);
}