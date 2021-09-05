function component() {
    const element = document.createElement('div');

    element.innerHTML = ' '.concat('Hello', 'webpack');

    return element;
}

document.body.appendChild(component());
