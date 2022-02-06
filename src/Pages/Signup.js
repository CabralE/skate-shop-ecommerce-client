function Signup(props) {
    return (
        <>
            <form>
                <fieldset>
                    <legend>Sign up</legend>
                    <div>
                        <label>Username </label>
                        <input type="text" placeholder="Username">
                        </input>
                    </div>
                    <div>
                        <label>E-mail </label>
                        <input type="email" placeholder="E-mail">
                        </input>
                    </div>
                    <div>
                        <label>Password </label>
                        <input type="password" placeholder="Password">
                        </input>
                    </div>
                </fieldset>
            </form>
        </>

    )
}

export default Signup