import useOnline from '../../hooks/useOnline';
import '../styles/footer.css';

const Footer = () => {
  const online = useOnline();
  return (
    <footer className="footer">
      <div className="footer-inner text-center">
        ©{new Date().getFullYear()} mprohorov.com All rights reserved.
        <div>
          Your internet connection is{' '}
          {online ? (
            <>
              online <span className="connection online"></span>
            </>
          ) : (
            <>
              offline <span className="connection offline"></span>
            </>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
