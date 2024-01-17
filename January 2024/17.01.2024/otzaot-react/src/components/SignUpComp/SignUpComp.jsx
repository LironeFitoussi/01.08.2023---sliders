export default function  SignUpComp () {
 return (
    <form className={StyleSheet.signUpForm}>
        <h1>Sign up to our wonderful site</h1>
        <label htmlFor="lName">First Name :</label>
        <input type="text" name="lName" />

        <label htmlFor="fName">Last Name:</label>
        <input type="text" name="fName" />
        <hr />
        <label htmlFor="email">Your E-mail:</label>
        <input type="email" name='email'/>
        <label htmlFor="password">You Password:</label>
        <input type="password" />
    </form>
 )
}