import { useForm } from 'react-hook-form'; 
// import { ReactNode, useState } from 'react';
import "../../postJob.css";
import InputField from '../../InputTypes/InputField';
import { useNavigate } from 'react-router-dom';
import { Job } from '../../../Find Job/Card/Card';

export type prop ={
  job: object;
  update: (data: object) => void; 
} 

function FirstStep({job, update}: prop){
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm(
    {
      defaultValues: job
    }
  );
  
  const onSubmit = (data: any) => {
    update(data)
    navigate('/Jobchaser/Post-job/Second-step')
    console.log(data);
  };

  // type formInfo = {
  //   type: string;
  //   label: string;  
  //   required: boolean;
  //   errors: Partial<FieldErrorsImpl<{
  //     [x: string]: string;
  //   }>>
  // }

  console.log(errors)

  return (
 
    <form className='post-job-form' onSubmit={handleSubmit(onSubmit)}>
      <InputField input={true} label='company' type='text' required={true} errors={errors} register={register} />
      <InputField input={true} label='logo' type='url' placeholder='Image URL' required={true} errors={errors} register={register} />
      <InputField input={true} label='job Title' type='text' required={true} errors={errors} register={register} />
      <InputField input={false} label='job description' type='text' required={true} errors={errors} register={register} />
      
      
      <div className="form-control">
        <label></label>
        <button type="submit">Next</button>
      </div>
    </form>
  
  );
}

export default FirstStep;
