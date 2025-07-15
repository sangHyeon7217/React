

/* 
    App
    |
    WelcomeDialog
    |
    TextPart
    |
    FancyBorder
    

*/
import './temp.css';

const FancyBorder =(props) => {
    return(
        <div className='FancyBorder'>
                <h1 className='Dialog-title'>{props.title}</h1>
                <p className='Dialog-message'>{props.message}</p>

        </div>
    )

}


const TextPart =(props) => {

    return(
    <FancyBorder title={props.title} message={props.message}></FancyBorder>
    )
}


const WelcomeDialog =() => {
    return(
        <TextPart title='환영합니다' message='하이루'/>
    )
    
}

const App =() => {
    return(
        <div>

                <WelcomeDialog/>
        </div>
    )
    
}

export default App;


