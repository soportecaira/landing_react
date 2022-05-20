const Header = () => {
    return (
        <div className="header">
        <div ><img src="assets/Logo-gradiente.png "className="logo"/></div>
        <div className="flex pages">
            <div className="links">
                <p><b>Students</b></p>
                <p><a href="centros.html">Centers</a></p>
            </div>
            <div id="languages">
                <p className="en"><b>EN</b> |</p>
                <p className="es"><a href="studentsES.html">ES</a></p>
            </div>
        </div>
    </div>
    );
  };
  
export default Header;
