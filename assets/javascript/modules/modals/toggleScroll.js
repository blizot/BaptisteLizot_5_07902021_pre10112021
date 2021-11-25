function preventDefault(event) {
    event.preventDefault();
}

function keyDownPreventDefault(event) {
    const key = event.key;
    if (key === ' ' || key === 'ArrowDown' || key === 'ArrowUp') {
        preventDefault(event);
    }
}

export function disableScroll() {
    document.body.addEventListener('wheel', preventDefault, {passive: false});
    document.body.addEventListener('touchmove', preventDefault, {passive: false});
    document.body.addEventListener('keydown', keyDownPreventDefault);
}

export function enableScroll() {
    document.body.removeEventListener('wheel', preventDefault, {passive: false});
    document.body.removeEventListener('touchmove', preventDefault, {passive: false});
    document.body.removeEventListener('keydown', keyDownPreventDefault);
}