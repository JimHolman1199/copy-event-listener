(function () {
    function addLink() {

        var selection = window.getSelection();

        dataLayer.push({
            'event': 'resultify',
            'eventCategory': 'copiedText',
            'eventAction': '{{Page Path}}',
            'eventLabel': selection //window.getSelection().toString()
        });

        if (/@/.test(selection)) {
            return true
        } else {
            var pagelink = '<br /> Read more at: ' + document.location.href,
                copytext = selection + pagelink,
                newdiv = document.createElement('div');

            newdiv.style.position = 'absolute';
            newdiv.style.left = '-99999px';

            document.body.appendChild(newdiv);
            newdiv.innerHTML = copytext;
            selection.selectAllChildren(newdiv);


            window.setTimeout(function () {
                document.body.removeChild(newdiv);
            }, 100);
        }

    }
    document.addEventListener('copy', addLink);
})()  
