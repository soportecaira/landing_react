const Header = () => {
    return (
        <div className="header">
        <div><img src="assets/Logo-gradiente.png" className="logo"/></div>
        <div className="flex pages">
            <div className="links">
                <p><a href="studentsES.html">Estudiante</a></p>
                <p><b>Universidad</b></p>
            </div>
            <div id="languages">
                <p><a href="centros.html">EN |</a></p>
                <p className="spanish"><b>ES</b></p>
            </div>
        </div>
    </div>
    );
  };
  
export default Header;
