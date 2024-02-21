"use client";
import React, { useContext } from 'react';
import Music from "../../../public/music.svg";
import Image from 'next/image';
import Swal from 'sweetalert2';
import { AuthContext } from '@/app/api/auth/AuthProvider';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const { signIn } = useContext(AuthContext);
  const navigate = useRouter();

  const handleLogIn = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Login",
        showConfirmButton: false,
        timer: 1500,
      });
      // Redirect to home page or any other desired route
      navigate.push('/');
    } catch (error) {
      console.error(error.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid email or password",
      });
    }
  };

  return (
    <div>
      <button className="button bg-black" onClick={() => document.getElementById('my_modal3').showModal()}>Sign In</button>
      <dialog id="my_modal3" className="modal">
        <div className="modal-box bg-[#3B3B3B]">
          <div className='flex justify-center mt-9'>
            <Image src={Music} height={18} width={12} className='me-1'/>
            <h1 className='text-[30px] custom-font my-6'>
              Fauget
            </h1>
          </div>
          <h1 className='text-center my-3 pb-1 font-bold text-[39px]'>Sign In</h1>
          <form onSubmit={handleLogIn} className='px-8'>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[18px] mt-3 mb-1">Email :</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@mail.com"
                className="input rounded-md bg-[#0C0C0C]"
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
                value="Sign in"
              />
            </div>
          </form>
          <h1 className='text-white px-9  py-3'> Don`t have account? Create an account  <span className=' text-black ms-1'>signup</span>   </h1>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
