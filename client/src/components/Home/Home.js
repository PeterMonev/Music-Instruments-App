import '../Home/Home.css'
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <main className="main"> 
        <section className='main__pic'>
           <article className="float">
            <h1 className='h1_hello'>HELLO THERE</h1>
            <h1>ARE YOU LOOKING FOR SOMETHING?</h1>
            <Link to={'/catalog'}>Search</Link>
           </article>
        </section>
        <section className='main__info'>
            <h1>WELCOME TO OUR SHOP</h1>
            <span>  </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Link to={'/contact'}>Read More</Link>
        </section>
  

      
    </main>
    )
}