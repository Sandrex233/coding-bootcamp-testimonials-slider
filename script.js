const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const image = document.querySelector('.image');
const feedback = document.querySelector('.feedback');

const users = [
    {
        name: 'Tanya Sinclair',
        role: 'UX Engineer',
        feedback: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
        image: '/images/tanya.svg'
    },
    {
        name: 'John Tarkpor',
        role: 'Junior Front-end Developer',
        feedback: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
        image: '/images/john.svg'
    }
]

let slide = 0;

const navigation = () => {
    // Check slide value
    if(slide > users.length-1){
        slide = 0;
    }
    image.innerHTML = `
    <img src="${users[slide].image}" alt="">
    `
    feedback.innerHTML = `
    <img src="/images/pattern-quotes.svg" alt="">
    <p>${users[slide].feedback}</p>
    <h4 class="name">${users[slide].name} <span class="role">${users[slide].role}</span></h4>
    `;
    slide++;
}

navigation();

prevBtn.addEventListener('click', navigation);
nextBtn.addEventListener('click', navigation);