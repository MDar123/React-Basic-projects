import {useForm} from 'react-hook-form'

function SignUpForm() {
    const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm();
  return (
    <>
    <form onSubmit={ handleSubmit((data) => {
        console.log(data);
    })}>
        <label htmlFor="firstname">First Name</label> <br />
        <input type="text" {...register('firstName',{ required:true,minLength:{
            value:3,
            message:"Minimum Length must be 3"
        },maxLength:{
            value:10,
            message:"Maximum Length must be less than 10"
            } })} /> <br />
        { errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p> }
        <br />

        <label htmlFor="lastName">Last Name</label> <br />
        <input type="text" {...register('lastName',{ required:true,minLength:{
            value:3,
            message:"Minimum Length must be 3"
        },maxLength:{
            value:10,
            message:"Maximum Length must be less than 10"
            } })} /> <br />
        { errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p> }
            <br />

        <label htmlFor="email">Email</label> <br />
        <input type="text" {...register('email',{ required:true , validate:{email:String} })} /> <br />

        <label htmlFor="password">Password</label> <br />
        <input type="text" {...register('password',{ required:true,minLength:{
            value:8,
            message:"Password must be 8 characters long"
        },maxLength:{
            value:30,
            message:"Password is not more than 30 characters"
            } })} /> <br />
        { errors.password && <p className='text-red-500'>{errors.password.message}</p> }
            <br />
            <input type="submit" disabled={isSubmitting} />

    </form>
    </>
  )
}

export default SignUpForm