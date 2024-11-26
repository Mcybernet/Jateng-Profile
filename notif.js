function showNotification(event) {
    event.preventDefault();
    var notification = document.getElementById('notification');
    notification.classList.add('show');
    setTimeout(function() {
    notification.classList.remove('show');
    }, 3000);


    setTimeout(function() {
    document.querySelector('.form-input').reset();
    }, 3000);
    }

