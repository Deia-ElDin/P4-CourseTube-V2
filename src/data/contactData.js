import { GoLocation } from 'react-icons/go';
import { MdSchool } from 'react-icons/md';
import { MdOutlineLanguage } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { BsPhoneFill } from 'react-icons/bs';

const contactData = [
  {
    id: 'location',
    icon: <GoLocation />,
    title: 'Location:',
    text: 'Abu Dhabi - United Arab Emirates',
  },
  {
    id: 'education',
    icon: <MdSchool />,
    title: 'Education:',
    text: 'Institute of Aviation Engineering & Technology - Egypt',
  },
  {
    id: 'language',
    icon: <MdOutlineLanguage />,
    title: 'Language:',
    text: 'English, Arabic',
  },
  {
    id: 'email',
    icon: <MdEmail />,
    title: 'Email:',
    text: 'Deia.Tech2021@gmail.com',
  },
  {
    id: 'phoneNumber',
    icon: <BsPhoneFill />,
    title: 'Phone Number:',
    text: '+97150 789 0072',
  },
];

export default contactData;
