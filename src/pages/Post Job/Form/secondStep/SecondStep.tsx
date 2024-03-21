// @ts-nocheck
import { useForm } from "react-hook-form";
import InputField from "../../InputTypes/InputField";
import { prop } from "../FirstStep/FirstStep";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import ControllerField from "../../InputTypes/ControllerField";
// import useFetch from "../../../../hook/useFetch";
import { Job } from "../../../Find Job/Card/Card";

function SecondStep({job, update}: prop){
  const [successMessage, setSuccesMessage] = useState('');

  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: any) => {
    const postedDate = new Intl.DateTimeFormat('en', {dateStyle: "long"}).format(new Date())
    
    const id = uuidv4(); 
    const extraData = {id, postedDate, ...job, ...data}
    console.log(extraData)
    postJobAd(extraData)
    update(extraData)
    update({})
    setSuccesMessage('Job registration is successful!')
  };

  // Lägger till jobannonsen med fetch('...', {method: 'POST})
  function postJobAd( jobData: Job){
    
    fetch('http://localhost:8000/jobs', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jobData) 
    })
    .then(res =>{
      console.log('Upload success:', res.json())
    })
    .catch(err => console.error(err))
  }
  
  return (
    <>
      {successMessage ? (<h1 className="success-message">{successMessage}</h1>) : 
      (<form className='post-job-form' onSubmit={handleSubmit(onSubmit)}>
        <InputField input={true} label='responsibility' type='text' required={true} errors={errors} register={register} />
        <InputField input={true} label='experience Level' type='text' required={true} errors={errors} register={register} />
        <ControllerField label={'programming Languages'} required={true} control={control} prop={'programmingLanguages'}/>
        <ControllerField label={'frameworks'} required={true} control={control} prop={'frameworks'}/>
        
        
        <div className="form-control">
          <label></label>
          <button type="submit">Post</button>
        </div>
      </form>)}
    </>
  )
}

export default SecondStep; 