const firstDate = document.querySelector('.firstDate');
const lastDate = document.querySelector('.lastDate');
const submit = document.querySelector('button');
const result = document.querySelector('.result')

submit.addEventListener('click', () => {
    let date1 = new Date(firstDate.value);
    let date2 = new Date(lastDate.value);

    if(date1.getTime() && date2.getTime()){
        let timeDifference = date2.getTime() - date1.getTime();
        
        // conversion in days
        let dayDifference = Math.abs(timeDifference / (1000 * 36 * 24) / 100);
        console.log(dayDifference);
        result.textContent = `Difference between the two dates is ${dayDifference}`
    }
})