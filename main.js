const markAllAsReadElement = document.querySelector('.header__link');
const unreadCountElement = document.querySelector('.unread-count');
const nameTitle = document.querySelector('.notification__title');
markAllAsReadElement.addEventListener('click', () => {
    markAllAsRead()
    resetUnreadCount()
});

function markAllAsRead(){
    const unreadNotifications= document.querySelectorAll('.notification--unread');
    unreadNotifications.forEach(Notification => Notification.classList.remove('notification--unread'))
}

function resetUnreadCount(){
    unreadCountElement.textContent = '0'
}
