import React, { useContext } from 'react'
import Music from "../../../public/music.svg"
import Image from 'next/image'
import Swal from 'sweetalert2';
import { AuthContext } from '@/app/api/auth/AuthProvider';
import { useRouter } from 'next/navigation';
export default function SignUp() {
  const { createUser, updateUser } = useContext(AuthContext);
  const  navigate = useRouter();



const handleSignUp = (event) => {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  

  if ((name, email, password)) {
    createUser(email, password)
      .then((result) => {
        updateUser(result.user,name)
          .then(() => {
              navigate.push('/')
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Successfully Register",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((err) => {
            console.log(err.message);
          });
        console.log(result.user);
      
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
};

  return (
    <div>

<button className="button bg-[#3B3B3B]" onClick={()=>document.getElementById('my_modal_2').showModal()}>Sign Up</button>
<dialog id="my_modal_2" className="modal ">
  <div className="modal-box bg-[#3B3B3B]">
  <div className='flex justify-center mt-9'>
                <Image src={Music} height={18} width={12} className='me-1'/>
      <h1 className='text-[30px] custom-font my-6 '>
      Fauget</h1>
      </div>
      <h1 className='text-center my-3 pb-1 font-bold text-[39px]'>Sign Up</h1>
      <form onSubmit={handleSignUp} className='px-8' >
              
      <div className="form-control">
                <label className="label">
                  <span className="label-text  text-[18px] mt-3 mb-1">Name:</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input rounded-md bg-[#0C0C0C] "
                  required
                />
                </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-[18px] mt-3 mb-1 ">Email :</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@mail.com"
                  className="input rounded-md bg-[#0C0C0C] "
                  required
                />
              </div>
              <div className="form-control pt-5">
                <label className="label">
                  <span className="label-text mb-1 text-[18px]">Password :</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="input rounded-md bg-[#0C0C0C]"
                 
                  required
                />
              </div>

              <div className="form-control pt-11 mb-5">
                <input
                  className="button bg-black"
                  type="submit"
                  value="Create an account"
                />
              </div>
             
            </form>
            <h1 className='text-white px-9  py-3'> Have account? Sign in  account <span className=' text-black'>signin</span>   </h1> 
        
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </div>
  )
}
