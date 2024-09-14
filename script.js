const headTextContainer = document.querySelector("#headtext");
const initial = "hardik";
// const final = initial;

for(var i = 0; i < initial.length; i++){
    setInterval(function () {
        headTextContainer.innerText += initial.charAt(i);
    }, 100);
}

// chinese to eng -> effect
// floating header with options

// headTextContainer.innerText="heay";

document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('#floatingheader li');
    
    listItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hovered');
        });

        item.addEventListener('mouseout', () => {
            if (!item.matches(':hover')) {
                item.classList.remove('hovered');
            }
        });
    });
});

document.querySelectorAll('ul#floatingheader li').forEach(item => {
    item.addEventListener('touchstart', function() {
        this.classList.toggle('hover');
    });
});
