import { Link } from "react-router-dom"

const styles={
    navStyles:{
        color:'red',
        backgroundColor:'yellow',
        textDecoration:'none',
        border : '2px dashed blue'
    },
    lineStyle: {
        display:'inline',
        padding:'20px'
    }
}


const Menu =()=>{
    return(
        <div style={styles.navStyles}>
            <ul>
                <li style={styles.lineStyle}>
                    
                    {/* <a href='/'>홈</a> */}
                    <Link to='/'>홈2</Link>
                </li>

                 <li style={styles.lineStyle}>
                    {/* <a href='/'>첫번째</a> */}
                    <Link to='/first'>첫번째2</Link>
                </li>

                 <li style={styles.lineStyle}>
                    {/* <a href='/'>두번째</a> */}
                    <Link to='/second'>두번째22</Link>
                </li>

            </ul>
        </div>
    )
}

export default Menu;