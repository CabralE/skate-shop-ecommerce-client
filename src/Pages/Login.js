function Login(props) {
    return (
    <>
    <form>
        <fieldset>
            <legend>Log in</legend>
            <div>
                <label>Username </label>
                <input type="text" placeholder="Username"/>

            </div>
            <div>
                <label>Password </label>
                <input type="password" placeholder="Password"/>
            </div>
            <button>Log in</button>
            <button>Sign-up</button>
        </fieldset>        
    </form>
    </>

    )
}

export default Login