// jQuery(function ($) {
//     var $doc = $(document),
//         ratio = $doc.width() / $(window).width(), //отношение окна к общей ширене блока, чтобы тянуть весь блок.
//         mousepos, to;
//     $doc.on('mousedown', '#scrl1', dragstart);

//     function dragstart(e) {
//         e.preventDefault();
//         mousepos = e.screenX;
//         $doc.on('mousemove.drag', drag); //в неймспейсе drag, чтобы потом отключить безболезненно для остальных листенеров
//         $doc.one('mouseup', dragstop);
//     }

//     function drag(e) {
//         clearTimeout(to);
//         var delta = (e.screenX - mousepos) * ratio;
//         to = setTimeout(function () { // таймаут чтобы события от мыши не перекрывали друг друга, 
//             $doc.scrollLeft($doc.scrollLeft() + delta);
//             mousepos = e.screenX;
//         }, 1);
//     }

//     function dragstop() {
//         $doc.off('mousemove.drag'); //отключаем свой mousemove.
//     }

// });


window.onload = function () {
            var scr = $(".carousel-section__galery");
            scr.mousedown(function () {
                var startX = this.scrollLeft + event.pageX;
                var startY = this.scrollTop + event.pageY;
                scr.mousemove(function () {
                    this.scrollLeft = startX - event.pageX;
                    this.scrollTop = startY - event.pageY;
                    return false;
                });
            });
            $(window).mouseup(function () {
                scr.off("mousemove");
            });
        }

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



