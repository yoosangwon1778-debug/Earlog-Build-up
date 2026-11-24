import { Link } from 'react-router-dom'
import './Button.css'

const Button = ({variant='primary', to, type = 'button', onClick, full = false, children})=>{
    const className = `btn btn-${variant}${full ? ' btn-full' : ''}`

    if(to){
        return <Link to={to} className={className}>{children}</Link>
    }

    return(
        <button type={type} className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
