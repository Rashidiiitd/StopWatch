function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').innerText = timeString;
}

setInterval(updateTime, 1000); // Update time every second
updateTime(); // Initial call to display time immediately
// this is changes i made 
