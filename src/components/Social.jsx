import React from 'react'

const Social = ({ socials }) => {
    return (
        <div className="social-media">
            <ul>
                {socials.map((social, index) => (
                    <li key={index}>
                        <a href={social.url} target="_blank" title={social.title} rel="noopener noreferrer">
                            {social.img}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Social;