// @ts-nocheck
// import '../../tailwind.css'
import { useForm } from 'react-hook-form'; 
import InputField from '../Post Job/InputTypes/InputField';


const SignInForm = () => {
  const { handleSubmit, register, formState: {errors}} = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <form className="post-job-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign in</h1>
        <div>
          <div>
            <InputField input={true} label='email' type="text" required={true} placeholder='Enter your email' errors={errors} register={register}/>
            <InputField input={true} label='password' type="password" required={true} placeholder='Enter your password' errors={errors} register={register}/>
          </div>

          <div>
            <p></p>
          </div>
        </div>

        <div style={{alignSelf: 'center'}}>
          <button 
            className='submit-btn'>Sign in
          </button>
          </div>
      </form>
    
    </>
  )
}

export default SignInForm; 