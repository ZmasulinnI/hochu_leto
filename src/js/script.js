var images_list = document.getElementsByClassName("background-image");

function change_img(images_list) {
    for(let i = 0; i < images_list.length; i++)
    {
        if (images_list[i].classList.contains('visible'))
        {
            images_list[i].classList.remove('visible')
            if (i == images_list.length-1) {
                images_list[0].classList.add('visible')
            }
            else
            {
                images_list[i+1].classList.add('visible')
            }
            break
        }
    }
}

let t = setInterval(change_img, 5000, images_list)


