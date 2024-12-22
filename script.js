function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Typewriter Effect
const texts = [
    "AI DEVELOPER",
    "AI ENGINEER",
    "AI SOFTWARE DEVELOPER"
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.style.display = tab.id === tabId ? 'block' : 'none';
    });

    buttons.forEach(button => {
        button.classList.toggle('active', button.textContent.toLowerCase() === tabId);
    });
}
// Lấy phần tử About Me
const aboutSection = document.querySelector('#about');

// Hàm kiểm tra khi phần tử xuất hiện trên màn hình
function revealSection() {
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionPosition < screenHeight - 100) {
        aboutSection.classList.add('active');
    }
}

// Gắn sự kiện cuộn
window.addEventListener('scroll', revealSection);
// Hàm kiểm tra khi nào phần tử #about xuất hiện trong viewport
function checkAboutSection() {
    const aboutSection = document.getElementById('about');
    const rect = aboutSection.getBoundingClientRect();
    
    // Kiểm tra xem phần tử có đang trong viewport không
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        aboutSection.classList.add('active'); // Thêm lớp active khi phần tử trong viewport
    }
}

// Lắng nghe sự kiện cuộn trang (scroll event)
window.addEventListener('scroll', checkAboutSection);

// Gọi hàm để kiểm tra ngay khi trang tải
checkAboutSection();
