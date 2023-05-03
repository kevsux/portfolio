import { RiMedalLine} from 'react-icons/ri'
import { AiOutlineFileDone } from 'react-icons/ai'
import { BiSupport } from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { ImStack } from 'react-icons/im'
import { MdContacts, MdAttachEmail } from 'react-icons/md'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { BsMessenger, BsInstagram, BsArrowRight } from 'react-icons/bs'
import { HiTemplate } from 'react-icons/hi'
import { FaFacebookSquare, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa'

export const shadow = {
    boxShadow: '0 0 2px black'
}

export const about = [
    {
    id: 1,
    icon: <RiMedalLine/>,
    title: 'Experience',
    description: 'No Experience'
    },
    {   
    id: 2,
    icon: <AiOutlineFileDone/>,
    title: 'Completed',
    description: '5 Projects'
    },
    {
    id: 3,
    icon: <BiSupport/>,
    title: 'Support',
    description: 'Online 24/7'
    }
]

export const navbar = [
    {
    id: 1,
    style: 'relative before:absolute before:content-["Home"] before:z-[-1] before:left-0 before:scale-0 before:top-[-6px] before:text-lg before:duration-[300ms] hover:before:left-[-53px] hover:before:scale-100 before:text-black/90 font-semibold z-50',
    icon: <AiFillHome className='text-2xl cursor-pointer hover:translate-y-[-4px] duration-200 active:scale-[.7]'/>,
    location: '#'
    },
    {
    id: 2,
    style: 'relative before:absolute before:content-["About"] before:z-[-1] before:left-0 before:top-[-7.5px] before:text-lg before:scale-0 before:duration-[300ms] hover:before:left-[-53px] hover:before:scale-100 before:text-black/90 font-semibold z-50',
    icon: <AiOutlineInfoCircle className='text-2xl cursor-pointer hover:translate-y-[-4px] duration-200 active:scale-[.7]'/>,
    location: '#about'
    },
    {
    id: 3,
    style: 'relative before:absolute before:content-["Skill"] before:z-[-1] before:left-0 before:top-[-5.5px] before:text-lg before:scale-0 before:duration-[300ms] hover:before:left-[-46px] hover:before:scale-100 before:text-black/90 font-semibold z-50',
    icon: <ImStack className='text-2xl cursor-pointer hover:translate-y-[-4px] duration-200 active:scale-[.7]'/>,
    location: '#skill'
    },
    {
    id: 4,
    style: 'relative before:absolute before:content-["Projects"] before:z-[-1] before:left-0 before:scale-0 before:top-[-8px] before:text-lg before:duration-[300ms] hover:before:left-[-75px] hover:before:scale-100 before:text-black/90 font-semibold z-50',
    icon: <HiTemplate className='text-2xl cursor-pointer hover:translate-y-[-4px] duration-200 active:scale-[.7]'/>,
    location: '#project'
    },
    {
    id: 5,
    style: 'relative before:absolute before:content-["Contact"] before:z-[-1] before:left-0 before:scale-0 before:top-[-5px] before:text-lg before:duration-[300ms] hover:before:left-[-70px] hover:before:scale-100 before:text-black/90 font-semibold z-50',
    icon: <MdContacts className='text-2xl cursor-pointer hover:translate-y-[-4px] duration-200 active:scale-[.7]'/>,
    location: '#contact'
    }
]

export const frontend = [

    {
    id: 1,
    icon: <BsFillPatchCheckFill/>,
    title: 'HTML',
    level: 'Basic'
    },
    {
    id: 2,
    icon: <BsFillPatchCheckFill/>,
    title: 'CSS',
    level: 'Advanced'
    },
    {
    id: 3,
    icon: <BsFillPatchCheckFill/>,
    title: 'Javascript',
    level: 'Intermediate'
    },
    {
    id: 4,
    icon: <BsFillPatchCheckFill/>,
    title: 'Tailwind',
    level: 'Intermediate'
    },
    {
    id: 5,
    icon: <BsFillPatchCheckFill/>,
    title: 'Git',
    level: 'Intermediate'
    },
    {
    id: 6,
    icon: <BsFillPatchCheckFill/>,
    title: 'React',
    level: 'Intermediate'
    }

]

export const backend = [
    {
    id: 1,
    icon: <BsFillPatchCheckFill/>,
    title: "Java",
    level: 'Intermediate'
    },
    {
    id: 2,
    icon: <BsFillPatchCheckFill/>,
    title: "Node Js",
    level: 'Intermediate'
    },
    {
    id: 3,
    icon: <BsFillPatchCheckFill/>,
    title: "MySQL",
    level: 'Intermediate'
    },
    {
    id: 4,
    icon: <BsFillPatchCheckFill/>,
    title: "Python",
    level: 'Intermediate'
    },
    {
    id: 5,
    icon: <BsFillPatchCheckFill/>,
    title: "Firebase",
    level: 'Intermediate'
    },
    {
    id: 6,
    icon: <BsFillPatchCheckFill/>,
    title: "PHP",
    level: 'Intermediate'
    },
]

export const socmed = [
    {
    id:1,
    icon: <MdAttachEmail/>,
    title: 'Email',
    link: "mailto:romero.markkevin.malapit5@gmail.com",
    direct: <BsArrowRight/>
    },
    {
    id:2,
    icon: <BsMessenger/>,
    title: 'Messenger',
    link: "https://m.me/kevinromero00",
    direct: <BsArrowRight/>
    },
    {
    id:3,
    icon: <BsInstagram/>,
    title: 'Instagram',
    link: "https://www.instagram.com/kevsus_",
    direct: <BsArrowRight/>
    },
]
export const button = [
    {
    id:1,
    title: 'All',
    },
    {
    id:2,
    title: 'Web'
    },
    {
    id:3,
    title: 'App'
    },
    {
    id:4,
    title: 'Design'
    },
]

export const allProject = [
    {
    id: 1,
    img: 'https://cdn.dribbble.com/users/278201/screenshots/5648233/dribbble.jpg',
    title: 'Technology Theme',
    demo: 'Demo'
    },
    {
    id: 2,
    img: 'https://cdn.dribbble.com/users/2866697/screenshots/6565189/190531_4x.jpg?compress=1&resize=840x630&vertical=top',
    title: 'Library App',
    demo: 'Demo'
    },
    {
    id: 3,
    img: 'https://cdn.dribbble.com/users/1253590/screenshots/6442400/darklp_4x.png?compress=1&resize=840x630&vertical=top',
    title: 'Dark Theme',
    demo: 'Demo'
    },
    {
    id: 4,
    img: 'https://assets.materialup.com/uploads/927582f1-dc2c-4160-bc54-56ff195121c3/preview.png',
    title: 'Calculator App',
    demo: 'Demo'
    },
    {
    id: 5,
    img: 'https://cdn.dribbble.com/users/2861526/screenshots/6764812/web_1920___3_4x.jpg?compress=1&resize=840x630&vertical=top',
    title: 'Restaurant',
    demo: 'Demo'
    },
    {
    id: 6,
    img: 'https://cdn.dribbble.com/userupload/6465327/file/original-4588e6131388b4c12640302024358859.png?compress=1&resize=1600x1200',
    title: 'Space Theme',
    demo: 'Demo'
    },
    {
    id: 7,
    img: 'https://cdn.dribbble.com/users/427857/screenshots/15653593/media/773aa84d6f94a9bdaa2474964753f87d.png?compress=1&resize=840x630&vertical=top',
    title: 'Shopping',
    demo: 'Demo'
    },
]

export const webProjects = [
    {
    id: 1,
    img: 'https://cdn.dribbble.com/users/2861526/screenshots/6764812/web_1920___3_4x.jpg?compress=1&resize=840x630&vertical=top',
    title: 'Restaurant',
    demo: 'Demo'
    },
    {
    id: 2,
    img: 'https://cdn.dribbble.com/users/427857/screenshots/15653593/media/773aa84d6f94a9bdaa2474964753f87d.png?compress=1&resize=840x630&vertical=top',
    title: 'Shopping',
    demo: 'Demo'
    },
]

export const appProject = [
    {
    id: 1,
    img: 'https://assets.materialup.com/uploads/927582f1-dc2c-4160-bc54-56ff195121c3/preview.png',
    title: 'Calculator App',
    demo: 'Demo'
    },
    {
    id: 2,
    img: 'https://cdn.dribbble.com/users/2866697/screenshots/6565189/190531_4x.jpg?compress=1&resize=840x630&vertical=top',
    title: 'Library App',
    demo: 'Demo'
    },
    
]

export const designProject = [
    {
    id: 1,
    img: 'https://cdn.dribbble.com/userupload/6465327/file/original-4588e6131388b4c12640302024358859.png?compress=1&resize=1600x1200',
    title: 'Space Theme',
    demo: 'Demo'
    },
    {
    id: 2,
    img: 'https://cdn.dribbble.com/users/1253590/screenshots/6442400/darklp_4x.png?compress=1&resize=840x630&vertical=top',
    title: 'Dark Theme',
    demo: 'Demo'
    },
    {
    id: 3,
    img: 'https://cdn.dribbble.com/users/278201/screenshots/5648233/dribbble.jpg',
    title: 'Technology Theme',
    demo: 'Demo'
    }
]
export const footerLink = [
    {id: 1, location: '#about', title: 'About'},
    {id: 2, location: '#skill', title: 'Skill'},
    {id: 3, location: '#project', title: 'Project'},
]
export const footerMedia = [
    {id: 1, location: 'https://www.facebook.com/kevinromero00', icon: <FaFacebookSquare/>},
    {id: 2, location: 'https://www.instagram.com/kevsus_/', icon: <FaInstagram/>},
    {id: 3, location: 'https://www.instagram.com/kevsus_/', icon: <FaTwitter/>},
    {id: 4, location: 'https://github.com/Kevszz', icon: <FaGithub/>},
]