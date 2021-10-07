export default function Title(props){
    return(
        <div className="title-wrapper">
            <div className="title-left">
                <h1>To do List</h1> 
            </div>
            <div className="title-right">
                <button className="button-logout" onClick={props.logoutUser()}>Logout</button>
            </div>  
        </div>
    )
}