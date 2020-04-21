if (document.readyState !== 'loading') {
    loadEmojis();
} else {
    document.addEventListener('DOMContentLoaded', () => loadEmojis());
}

/**
 * @description Sets the emojis in a container.
 *  Each emoji has its onClick listener for fill the chat input.
 */
function loadEmojis() {
    
    document.addEventListener('DOMNodeInserted', function (e) {

        if (e.target && e.target.id === 'chat-input') {

            const smojisPanel = document.getElementsByClassName('smileys-panel');

            if (smojisPanel) {

                const smileysContainer = document.getElementById('smileysContainer');

                smileysContainer.innerHTML = '';

                const textArea = document.getElementById('usermsg');

                Emoji.emojis.forEach((element, index) => {

                    const emojiSpan = document.createElement('span');
                    emojiSpan.style = 'width: 1em; height: 1em; margin: 0px 0.05em 0px 0.1em; vertical-align: -0.1em;';
                    emojiSpan.innerText = element.emoji;
                    emojiSpan.addEventListener('click', () => {
                        textArea.focus();
                        document.execCommand('insertText', false, ` ${element.emoji}`);
                    });

                    const spanContainer = document.createElement('span');
                    spanContainer.classList = ['smiley'];
                    spanContainer.appendChild(emojiSpan);

                    const smileyContainer = document.createElement('div');
                    smileyContainer.classList = ['smileyContainer'];
                    smileyContainer.id = `smiley${index}`;
                    smileyContainer.appendChild(spanContainer);

                    smileysContainer.appendChild(smileyContainer);
                });

                smojisPanel[0].style = 'overflow-y: auto;';
            }
        }
    }, false);
}
