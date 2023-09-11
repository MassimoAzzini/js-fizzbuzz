const containerBox = document.querySelector('.content')

for(let i = 0; i < 100; i++){
  const box = document.createElement('div');
  console.log(i + 1);
  box.classList.add('box');
  box.append(i + 1);

  if(!((i + 1) % 3)){

    box.classList.add('fizz');
    
  }else if(!((i + 1) % 5)){

    box.classList.add('buzz');

  }

  // if(!((i + 1) % 3)) && (!((i + 1) % 5)){

  //   box.classList.add('fizz-buzz');

  // }

  containerBox.append(box);

}