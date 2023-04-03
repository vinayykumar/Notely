function Header({handleToggleDarkMode}){
    return (
        <div className="header">
            <h1>Notely</h1>
            <button className="save" onClick={()=>
            handleToggleDarkMode((previousDarkMode)=> !previousDarkMode)}>Toggle</button>
        </div>
    )
}

export default Header;