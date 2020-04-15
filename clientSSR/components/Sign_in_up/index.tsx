
import styles from './index.module.css'
import Custom_input from '../Custom_input'
import Custom_button from '../Custom_button'
interface Isign {

}

const Sign: React.FC<Isign> = () => {
    // const [state, setstate] = useState(initialState)
    return (
        <section className={styles.sign}>
            <h1>have an account</h1>
            <span>Sign in with your email and password</span>
            <form>
                <Custom_input type='email'  placeholder='Email' required/>
                <Custom_input type='password'  placeholder='Password' autoComplete="off" required/>
                <Custom_button type='submit' > 
                    Sign in 
                </Custom_button>
            </form>
        </section>  
    )
}



export default Sign;
