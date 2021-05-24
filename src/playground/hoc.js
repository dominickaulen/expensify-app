import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    )
};

//requireAuthentication 

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth === true ?
            (<WrappedComponent {...props}/>) : 
            ('You must be authenticated to view this information')
            }
        </div>
    )
}

const AuthInfo = requireAuthentication(Info)
const AdminInfo = withAdminWarning(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info='These are my details!'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={false} info='These are my details!'/>, document.getElementById('app'));