import img1 from '../../images/svg-1.svg';
import img2 from '../../images/svg-2.svg';
import img3 from '../../images/svg-3.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About CodeHead',
    headline: 'Your Gateway to Coding Mastery',
    description: "At CodeHead, our goal is to make coding simple, fun, and accessible for everyone. Whether you're just starting or looking to enhance your skills, our one-on-one tutoring is designed to empower students through personalized lessons, ensuring a solid foundation in coding.",
    buttonLabel: 'Learn More',
    imgStart: false,
    img: img1,  // Relevant image representing learning or growth
    alt: 'About CodeHead',
    dark: true,
    primary: true,
    darkText: false
};


export const homeObjTwo = {
    id: 'discover',
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: 'Discover the Power of Code',
    headline: 'Learn Skills That Shape the Future',
    description: "Coding isn't just about writing programs—it's about solving problems and turning ideas into reality. At CodeHead, we help you discover the potential of coding, from building your own apps to gaining essential problem-solving skills that will be valuable in any career.",
    buttonLabel: 'Discover More',
    imgStart: true,
    img: img2,  // Image representing exploration or future tech
    alt: 'Discover Coding',
    dark: true,
    primary: false,
    darkText: false
};



export const homeObjThree = {
    id: 'learning',
    lightBg: true,
    lightText: true,
    lightTextDesc: false,
    topLine: 'Personalied Learning',
    headline: 'Flexible One-on-One Tutoring, Tailored for You',
    description: "At CodeHead, we understand that every student learns differently. That's why our tutoring sessions are designed to fit your needs—whether you prefer learning online or in-person, we’ll create a customized plan that helps you achieve your coding goals at your own pace.",
    buttonLabel: 'Get Started',
    imgStart: false,
    img: img3,
    alt: 'Personalised Learning',
    dark: true,
    primary: true,
    darkText: false
};
