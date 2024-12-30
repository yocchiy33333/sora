const paragraph = document.getElementById('paragraph');
const zihanki = document.getElementById('zihanki');
const mizu = document.getElementById('mizu');
const kora = document.getElementById('kora');
const atsui = document.getElementById('atsui');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const kane = document.getElementById('kane')
const score = document.getElementById('score')
const gamearea = document.getElementById('gamearea')

let endFlag = false;

let win = 0;
let lose = 0;
let draw = 0;


function game(num){
    if(endFlag){
        return;
    }
    endFlag = true;
    paragraph.innerText='無料購入をしろ！'
    kane.innerText=' '

    if(num === 0){
        kora.classList.add('hide')
        atsui.classList.add('hide')
    
    }else if(num === 1){
        mizu.classList.add('hide')
        atsui.classList.add('hide')
    }else{
        kora.classList.add('hide')
        atsui.classList.add('hide')
    }
    const randamnum = Math.floor(Math.random()*3);

if(randamnum === 0){
    zihanki.src='water.png'
}else if(randamnum === 1){
    zihanki.src='drink_cola_petbottle.png'
}else{
    zihanki.src='drink_petbottle_coffee.png'
}


    if(num === randamnum){
        result.innerText='引き分けです'
        draw++
    }else if(num === 1 && randamnum === 0){
        
result.innerText='無料購入に成功しました'
win++
        }else if(num === 2 && randamnum === 1){
result.innerText='無料購入に成功しました'
win++
  }else if(num === 0 && randamnum === 2){
result.innerText='無料購入に成功しました'
win++
}else{
    result.innerText='敗北です....'
lose++
}
restart.classList.remove('hide')
score.classList.remove('hide')
}

restart.onclick = () => {
paragraph.innerText='0円で買いましょう'
gamearea.classList.remove('hide')
zihanki.src='machine_jidouhanbaiki.png'
mizu.classList.remove('hide')
kora.classList.remove('hide')
atsui.classList.remove('hide')
restart.classList.add('hide')
result.classList.remove('hide')
endFlag=false;
}


