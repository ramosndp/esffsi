if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator
		.serviceWorker
		.register('/sw.js')
        .then(reg => {
                console.log('Registo completo. No âmbito ' + reg.scope);
            })
            .catch(registrationError => {
                console.log('Registo incompleto: ', registrationError);
            });
    });
}

