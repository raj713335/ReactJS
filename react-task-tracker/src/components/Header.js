import PropTypes from 'prop-types'


const Header = (props) => {
    return (
        <div>
            <header>
                <h1> {props.title} Task Tracker </h1>
            </header>

        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


//CSS in JS
//const headingStyle = {
//    color: 'red',
//    backgroundColor: 'black'
//}

export default Header