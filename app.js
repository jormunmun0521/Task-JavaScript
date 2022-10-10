// 

let count = 0 ;

for (let i = 1; i < 51 ; i++ ) {
  count = count + 1;

  counter(count)

function counter (count){

  let display = '';

  if ( count == 50 ) { 
    display = '50回カウントが終わりました。';
    alert( display )
  } else if ( count % 10 == 0) {
    display = '今' + count + '回ループしました';
    console.log(display)
  } else if ( count % 4 == 0 ) {
    display = '4で割れる数です。' + count ;
    console.log(display)
  } else {
    display = '';
  }

  return display
}

}

