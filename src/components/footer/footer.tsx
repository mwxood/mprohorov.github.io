import '../styles/footer.css';

const Footer = () => {
    return(
        <footer className='footer'>
           <div className='footer-inner text-center'>
            ©{new Date().getFullYear()} mprohorov.com All rights reserved
           </div>
        </footer>
    )
}

export default Footer