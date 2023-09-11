const row = document.querySelector('.content')

for(let i = 0; i < 100; i++){
  const box = document.createElement('div');
  console.log(i + 1);
  box.classList.add('box')

  if(!(i + 1) % 3){

    
  }

  row.append(box);

}