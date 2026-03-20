import { Icon } from '@iconify/react';

import Form from './Form';

export default function Contact() {
  return (
    <section id='contact'>
      <div className='container flex gap-16 max-lg:flex-col lg:flex'>
        <div className='w-full space-y-6'>
          <h2>Get in Touch</h2>
          <p className='mb-8'>
            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new
            projects, creative ideas or opportunities to be part of your visions.
          </p>
          <div className='flex gap-4'>
            <Icon
              icon='lucide:mail'
              className='bg-accent/20 text-accent dark:text-accent-light size-12 rounded-xl p-3'
            />
            <div>
              <p className='text-muted text-sm font-medium tracking-wider uppercase'>email</p>
              <a
                href='mailto:ziadahmed2371@gmail.com'
                target='_blank'
                className='text-dark dark:text-light text-lg font-bold'
              >
                ziadahmed2371@gmail.com
              </a>
            </div>
          </div>
          <div className='flex gap-4'>
            <Icon
              icon='lucide:linkedin'
              className='bg-accent/20 text-accent dark:text-accent-light size-12 rounded-xl p-3'
            />
            <div>
              <p className='text-muted text-sm font-medium tracking-wider uppercase'>linkedin</p>
              <a
                href='https://www.linkedin.com/in/ziad2371'
                target='_blank'
                className='text-dark dark:text-light text-lg font-bold'
              >
                in/ziad2371
              </a>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
}
