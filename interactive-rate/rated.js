window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const rate = urlParams.get('rate'); 
    const localNumber = document.getElementById('localNumber');
    localNumber.innerText = String(rate);
}
