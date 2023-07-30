import React from 'react'
import LinkList from './Link'
import Social from './Social'
import Profile from '../assets/profile-icon.jpg'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'

const Page = () => {
  const links = [
    { title: 'Website', url: 'https://out-with-ideas/' },
    { title: 'Instagram', url: 'https://instagram.com/ide_copas' },
    { title: 'Whatsapp', url: 'wa.me/6281288080998' },
    { title: 'Menu', url: 'https://out-with-ideas/menu' }
  ];

  const socials = [
    { title: 'Instagram', img: <FaInstagram/>, url: 'https://instagram.com/ide_copas' },
    { title: 'Twitter', img: <FaTwitter/>, url: 'https://twitter.com/ide_copas' },
    { title: 'Whatsapp', img: <FaWhatsapp/>, url: 'wa.me/6281288080998' }
  ];

  const iconStyle = {
    fontSize: '50px'
  }

  const name = 'Out With Ideas';
  const bio = 'Homemade Cookies n Coffee';

  return (
    <div className="main">
        <img src={Profile} className='profile' alt="Profile"/>
        <div className='personal-data'>
            <h3>{name}</h3>
            <h4>{bio}</h4>
        </div>
        <LinkList links={links} />
        <Social socials={socials} />
    </div>
  );
};

export default Page;
