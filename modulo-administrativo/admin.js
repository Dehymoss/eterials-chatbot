document.querySelectorAll('nav button[data-modulo]').forEach(btn => {
    btn.addEventListener('click', function() {
        const modulo = this.getAttribute('data-modulo');
        fetch(`${modulo}/${modulo}.html`)
            .then(res => res.text())
            .then(html => {
                document.getElementById('admin-main').innerHTML = html;

                // Cargar CSS del submódulo
                let cssId = `css-${modulo}`;
                if (!document.getElementById(cssId)) {
                    let link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = `${modulo}/${modulo}.css`;
                    link.id = cssId;
                    document.head.appendChild(link);
                }

                // Cargar JS del submódulo
                let jsId = `js-${modulo}`;
                let oldScript = document.getElementById(jsId);
                if (oldScript) oldScript.remove();
                let script = document.createElement('script');
                script.src = `${modulo}/${modulo}.js`;
                script.id = jsId;
                document.body.appendChild(script);
            });
    });
});