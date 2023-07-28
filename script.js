function highlight() {
    //Write your code here
	const bold = document.querySelectorAll('strong');

	bold.forEach((i)=>{
		i.style.color = 'green';
	})


}


function return_normal() {
    //Write your code here
	const bold = document.querySelectorAll('strong');

	bold.forEach((i)=>{
		i.style.color = 'black';
	})
    
}
