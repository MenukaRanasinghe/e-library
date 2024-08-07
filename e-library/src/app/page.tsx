'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        router.push('/protected');
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (err) {
      setError('An error occurred');
    }
  };

  return (
    <main className='bg-slate-100 h-screen flex items-center justify-center p-10'>
      <div className='grid w-full h-full grid-cols-1 bg-white md:grid-cols-2'>
        <div className='bg-[#16202a] text-white flex items-center justify-center flex-col p-8'>
          <div className='my-4 text-center'>
            <h1 className='text-3xl font-semibold'>Login</h1>
            <p className='mt-2 text-xs text-slate-400'>Sign In with your Credentials.</p>
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col items-center w-full'>
            <Button
              type='button'
              className='flex items-center justify-center gap-4 px-12 mb-4 bg-transparent rounded-full w-[320px]'
              variant='outline'>
              <FcGoogle />
              Sign In with Google
            </Button>

            <div className='w-[320px] mb-4'>
              <Label htmlFor='email' className='text-sm block mb-1'>Email*</Label>
              <Input
                className='bg-transparent rounded-full'
                type='email'
                id='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='w-[320px] mb-4'>
              <Label htmlFor='password' className='text-sm block mb-1'>Password*</Label>
              <Input
                className='bg-transparent rounded-full'
                type='password'
                id='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button type='submit' className='w-[320px] rounded-full bg-blue-800 hover:bg-blue-900'>
              Login
            </Button>
            {error && <p className='mt-4 text-red-500'>{error}</p>}
          </form>
        </div>
        <div className='relative hidden md:block'>
          <Image
            className='object-cover'
            layout='fill'
            src='/bg.jpg'
            alt='Background Image'
          />
        </div>
      </div>
    </main>
  );
}
