const numbers = document.getElementsByClassName("numbers");
let title = document.querySelector("bdo");
const remove = document.getElementById("remove");
const sum = document.getElementById("add");
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function(){
        let summative = [];
        title.textContent = this.textContent + title.textContent;
        const strRev =  title.textContent.split('').reverse().join('');
        summative.push(strRev);
        console.log(summative);
        console.log(strRev);

        sum.addEventListener("click", function(){
            const addition = Number(strRev) + 10;
            title.textContent = addition;
            title.textContent= title.textContent.split('').reverse().join('');


        })
        


        
    })
}

remove.addEventListener("click",function(){
    title.textContent = ""

})








