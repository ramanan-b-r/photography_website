document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');
    
    let counter =1;
    while(counter<=500) {
        
        const photoDiv = document.createElement('div');
        photoDiv.className = 'photo';
        const img = document.createElement('img');
        img.src = `photos/photo${counter}.jpg`;
        img.onload = function(){
        img.onclick = function() {
            location.href = img.src;
        };
        photoDiv.appendChild(img);
        gallery.appendChild(photoDiv);
        }
        counter = counter+1;
    };
});
