function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <small data-testid="footer-text">&copy; {year} Deia-Eldin</small>
    </footer>
  );
}

export default Footer;
