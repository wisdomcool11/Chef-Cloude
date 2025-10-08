

import ChefHead from '/images/chef-claude-icon.png'

function Header (){
    return (
        <>
         <header 
         className='flex justify-center items-center gap-4 p-6 '>

            <img 
            src={ChefHead} 
            alt="Chef cloud head icon" 
            className='bg-center bg-cover bg-no-repeat w-[60px]'
            />

            <h1 className='text-3xl '>Chef Claude</h1>
         </header>
        </>
    )
}


export default Header;
