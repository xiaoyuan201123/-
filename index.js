/*
 * @Author: yangliu
 * @Date: 2021-09-26 12:05:45
 * @LastEditors: yangliu
 * @LastEditTime: 2021-09-26 18:38:30
 */
let play_pause = document.getElementById("play-pause")
let preMusic = document.getElementById("preMusic")
let nextMusic = document.getElementById("nextMusic")

let btn = document.getElementsByClassName("play")[0]
let myMusic = document.getElementById("myMusic")
let myMusic1 = document.getElementById("myMusic1")
let txt = document.getElementById("text")
let con = document.getElementsByClassName("content")[0]
let musicArr = ["《Edge Of My Lif》","《Diamonds》"] //定义一个数组储存歌曲
let mark = true
let currentlineNum = 0  //当前行
let musicInd = 0 



//播放和暂停
play_pause.onclick = function(){
    if(this.innerText == "▶"){
        myMusic.play()
        this.innerText = "| |"
        let img = document.getElementById('aroundImg')
        img.classList.toggle('rotateZ')
    }else{
        myMusic.pause(
            this.innerText = "▶"
        )
        let img = document.getElementById('aroundImg')
        img.classList.toggle('rotateZ')
    }
}

console.log()

//下一首
nextMusic.onclick = function(){
    currentlineNum = 0
    if(musicInd < musicArr.length -1 ){
        musicInd++;
        if(play_pause.innerText != "▶"){
            myMusic1.play();
        }else{
            musicInd = 0
            if(play_pause.innerText != "▶"){
                myMusic1.play()
            }
        }
    }
}



// btn.onclick = function(){
//     if(mark){
//         this.className += " rotate"
//         myMusic.play()
//         mark = false
//     }else{
//         this.className = "play"
//         myMusic.pause()
//         mark = true
//     }
// }

//取到歌词
let lrc = txt.value
let lrcArr = lrc.split("[")
let html = ""
for(let i = 0; i<lrcArr.length; i++){
    let arr = lrcArr[i].split("]")
    let time = arr[0].split(".")
    let timer = time[0].split(":")
    let ms = timer[0] * 60+ timer[1] *1
    let test = arr[1]
    if(test){
        html += "<p id=" + ms+">"+ test + "</p>"
    }
    con.innerHTML = html

}
console.log(html)


let num = 0
let oP = con.getElementsByTagName("p")
myMusic.addEventListener("timeupdate",function(){
    let curTime = parseInt(this.currentTime)

    console.log('curTime:', curTime)
    if(document.getElementById(curTime)){
        for(let i = 0; i < oP.length; i++){
            oP[i].style.cssText = "font-size: 15px;"
        }
        document.getElementById(curTime).style.cssText = "background: linear-gradient(-3deg,#eebd89 0%,#d13abd 100%); -webkit-background-clip:text; color: transparent; font-size: 20px;"
        if(oP[ 7 + num].id == curTime){
            con.style.top = -20 * num + "px"
            num ++
        }
    
    }
})