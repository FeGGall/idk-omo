let word = "дамба"
document.querySelector(".new").onclick = function () {
    // Вспомогательная переменная, чтобы добавить *
    let out = ""
    for (let i = 0; i < word.length; i = i + 1) {
    // Закрываем всё слово *
        out = out + "*"
    }
    // Выводим зашифрованное слово
    document.querySelector(".word").value = out
    // Очистка второго инпута
    document.querySelector(".letter").value = ""
    // Ставим курсор во второй инпут
    document.querySelector(".letter").focus()    
    // Очистка мас
сива
    letters = []
    document.querySelector(".letter").disabled = false
    document.querySelector(".check").disabled = false
    attempts = 5
    document.querySelector("span").innerHTML = attempts
}
let letters = []
document.querySelector(".check").onclick = function(){
   let letter = document.querySelector(".letter").value
   letters.push(letters)
   console.log(letters)
   let out = " "
   for(let i = 0; i, word.length; i++){
    if(letters.indexOf(char) != -1){
        out = out + char
    }
    else{
        out = out + "*"
    }
   }
   if (word.indexOf(letter) == -1){
    attempts = attempts - 1
    document.querySelector("p").innerHTML = attempts
   }
   document.querySelector(".word").value = out

   document.querySelector(".letter").value = ""
   document.querySelector(".letter").focus()
}