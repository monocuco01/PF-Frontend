import {Link} from 'react-router-dom'
const Failure = () => {
    return(
        <div>
            <h1 className="text-center">El pago ha sido rechazado</h1>
            <Link to="/store">
            Back
            </Link>
        </div>
    )
}

export default Failure