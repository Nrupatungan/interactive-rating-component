const rating_card = document.querySelector('#rating-card')
const thank_you_card = document.querySelector('#thank-you-card')
const submit_btn = document.querySelector('#sub-btn')
const rating_btn_arr = document.querySelectorAll('#rating-btn')
const rating_number = document.querySelector('#rating-number')

submit_btn.addEventListener('click', () => {
    setInterval(() => {
        rating_card.classList.add('hidden')
        thank_you_card.classList.remove('hidden')
    }, 250)
    
})

rating_btn_arr.forEach(rate => {
    rate.addEventListener('click', () => {
        let num = Number(rate.textContent) - 1;
        let previous_btn = rating_btn_arr[num-1];

        rating_number.textContent = num + 1;

        if(num - 1 >= 0 && num - 1 < rating_btn_arr.length){
            previous_btn.className = "bg-gray-400 w-12 h-12 text-Very_Dark_Blue rounded-full font-medium active:scale-90 hover:bg-Orange hover:text-White ease-linear duration-150";
        }
        btn_change(num);
    })
})

let btn_change = (num) => {
    let alive = true;
    let present_btn = rating_btn_arr[num];
    let next_btn = num + 1;
    let sup_prev_btn = num - 2;

    present_btn.className = "bg-Orange w-12 h-12 text-White  rounded-full font-medium active:scale-90 hover:bg-Orange hover:text-White ease-linear duration-150";

    while(alive){
        // right sub-array
        for(let i = next_btn; i < rating_btn_arr.length; i++){
            let btns = rating_btn_arr[i];
            
            btns.className = "bg-gray-700 w-12 h-12 text-White rounded-full font-medium active:scale-90 hover:bg-Orange hover:text-White ease-linear duration-150";
        }

        //left sub-array
        for(let i = sup_prev_btn; i >= 0 ; i--){
            let btns = rating_btn_arr[i];
            
            btns.className = "bg-gray-700 w-12 h-12 text-White rounded-full font-medium active:scale-90 hover:bg-Orange hover:text-White ease-linear duration-150";
        }

        alive = false;
    }
    
}