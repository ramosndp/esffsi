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
window.addEventListener("load", () => {
  function handleNetworkChange(event) {
    if (navigator.onLine) {
      document.body.classList.remove("offline");
    } else {
      document.body.classList.add("offline");
    }
  }
  window.addEventListener("online", handleNetworkChange);
  window.addEventListener("offline", handleNetworkChange);
});
