// 

let count = 0 ;

for (let i = 1; i < 51 ; i++ ) {
  count = count + 1;
}

function counter (count){

  let display = '';

  if ( count == 50 ) { 
    display = '50回カウントが終わりました。';
    alert( display )
  } else if ( count % 10 == 0) {
    display = '今' + count + '回ループしました';
  } else if ( count % 4 == 0 ) {
    display = '4で割れる数です。' + count ;
  } else {
    display = '';
  }

  return display

}
