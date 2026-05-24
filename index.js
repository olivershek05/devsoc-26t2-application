function createToggle(toggleId, textId) {
    const button = document.getElementById(toggleId);
    const text = document.getElementById(textId);

    text.classList.remove('show');
    button.textContent = '▶';
    
    button.addEventListener('click', function() {
        button.classList.add('spin');        
        if (text.classList.contains('show')) {
            text.classList.remove('show');
            button.textContent = '▶';
        } else {
            text.classList.add('show');
            button.textContent = '▼';
        }
    });
}

createToggle('toggle1', 'text1');
createToggle('toggle2', 'text2');
createToggle('toggle3', 'text3');
createToggle('toggle4', 'text4');
createToggle('toggle5', 'text5');
createToggle('toggle6', 'text6')