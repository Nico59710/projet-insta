document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll(".photo-container,.photo-container img,section,#photoprofil img,i,#logofleche,#menu,#cloche,#check,#titre h4,.photo-container,#following,#message,#mail,p,a,.ligne2 h4,.descriptions h4,li,#photoprofil");

    photos.forEach(photo => {
        photo.classList.add('skeleton');
    });
    // setTimeout(() => {
    //     photos.forEach(photo => {
    //         photo.classList.remove('skeleton');
    //     });
    // }, 3000);
});


