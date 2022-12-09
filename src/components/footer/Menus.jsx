import React from 'react';

const Menus = ({Links, title}) => {
  return (
    <div>
      <h3 className="font-bold text-2xl text-black pb-4">{title}</h3>
      <ul className="flex flex-col gap-4">
        {
          Links.map((link) => (
            <li key={link.name}>
              <a className='font-black text-base text-lightGray hover:text-primary' href={link.link}>{link.name}</a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
 
export default Menus;