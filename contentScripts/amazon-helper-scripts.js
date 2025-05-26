
const startHiderInterval = () =>{
    console.log('Starting Hider Interval');
    let hiderInterval = setInterval(()=>{
        if(hideShoppingCart()){
            clearInterval(hiderInterval);
        }
    },1);
}

const hideShoppingCart = () =>{
    let successfullyRemovedCartElement = false;
    let successfullyExpandedMainPage = false;

    let cartElement = document.getElementById('nav-flyout-ewc');
    if(cartElement!=null){
        cartElement.remove();
        successfullyRemovedCartElement = true;
    }

    let mainPageElement = document.getElementById('a-page');
    if(cartElement!=null){
        mainPageElement.style.width ='100vw';
        successfullyExpandedMainPage = true;
    }

    return successfullyRemovedCartElement && successfullyExpandedMainPage;
}

startHiderInterval();
