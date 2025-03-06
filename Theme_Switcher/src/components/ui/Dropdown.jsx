import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
export default function Dropdown() {
    const [isDarkTheme,setDarkTheme] = useState(false);
    function lightTheme(){
      setDarkTheme(false)
      const data = document.querySelector('html');
      data.classList.remove('light','dark');
      data.classList.add('light')
      
    }
    function darkTheme(){
      setDarkTheme(true)
      const data = document.querySelector('html');
      data.classList.remove('light','dark');
      data.classList.add('dark')
    }
  return (
    <div>
      <Menu>
        <MenuButton className="cursor-pointer inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold text-white 
        focus:outline-none data-[open]:bg-slate-900/10 data-[focus]:outline-1 data-[focus]:outline-white">
            {
                isDarkTheme?<MoonIcon className="size-6 fill-cyan-500" />: <SunIcon className='size-6 fill-cyan-500' />
            }
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom center"
          className={`w-32 origin-top-right rounded-xl border
           border-white/5 bg-slate-900/10 p-1 text-sm/6 
             ${isDarkTheme?`text-white font-bold`:`text-black font-bold`} transition duration-100 ease-out
            [--anchor-gap:var(--spacing-1)] focus:outline-none
             data-[closed]:scale-95 data-[closed]:opacity-0`}
        >
          <MenuItem>
            <NavLink className={`
                cursor-pointer group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 ${!isDarkTheme?`text-cyan-500`:`text-white`}`}
                onClick={lightTheme} >
              <SunIcon className={`size-6 ${!isDarkTheme?`fill-cyan-500`:`fill-white`}`} />
              Light
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink className={`cursor-pointer group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 ${isDarkTheme?`text-cyan-500`:`text-black`}`} onClick={darkTheme}>
              <MoonIcon className={`size-6 ${isDarkTheme?`fill-cyan-500`:`fill-black`}`} />
              Dark
            </NavLink>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}