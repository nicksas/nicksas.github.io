var rotate = document.querySelector('.rotate');
allSize = ['(width: 1024px) and (height: 1366px)',
    '(width: 768px) and (height: 1024px)',
    '(width: 800px) and (height: 1280px)',
    '(max-width: 854px) and (max-height: 480px)'

];
var sizeIpadPro = window.matchMedia(allSize);
if (sizeIpadPro.matches) {
    rotate.classList.add('rotateShow');
}
window.addEventListener('resize', function () {
    if (sizeIpadPro.matches) {
        rotate.classList.add('rotateShow');
    } else {
        rotate.classList.remove('rotateShow');
    }
});
