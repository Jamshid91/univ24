const c1 = document.getElementById('c1'),
      c2 = document.getElementById('c2'),
      total = document.getElementById('total').innerHTML,
      score = document.getElementById('score').innerHTML;

function update() { 
  c1.setAttribute('stroke-dasharray', `${(1000-total*5)/total} 5`);
  c2.setAttribute('stroke-dasharray', `${1000/total*score} 1000`);
};
update();


