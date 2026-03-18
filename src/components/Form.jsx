import emailjs from '@emailjs/browser';
import { useForm } from '@tanstack/react-form';
import { toast } from 'sonner';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function FieldError({ field }) {
  return field.state.meta.isTouched && field.state.meta.errors.length > 0 ? (
    <p className='mt-1 text-xs text-red-600 dark:text-red-400'>
      {field.state.meta.errors[0].message ?? field.state.meta.errors[0]}
    </p>
  ) : null;
}

export default function Form() {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: async ({ value }) => {
      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: value.name,
            from_email: value.email,
            message: value.message,
            to_email: 'ziadahmed2371@gmail.com',
            from_name_initial: value.name
              .split(' ')
              .map(n => n[0])
              .join('')
          },
          PUBLIC_KEY
        );
        toast.success("Message sent! I'll get back to you soon.");
        form.reset();
      } catch {
        toast.error('Something went wrong. Please try again.');
      }
    }
  });

  return (
    <form
      className='dark-card flex w-full flex-col gap-6 rounded-3xl p-8'
      onSubmit={e => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <div className='grid grid-cols-2 gap-4'>
        {/* Name */}
        <form.Field
          name='name'
          validators={{
            onBlur: ({ value }) =>
              !value.trim()
                ? 'Name is required'
                : value.trim().length < 2
                  ? 'Name must be at least 2 characters'
                  : undefined
          }}
        >
          {field => (
            <div className='form-field'>
              <label htmlFor={field.name}>Name</label>
              <input
                id={field.name}
                placeholder='Enter your Name'
                type='text'
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
              />
              <FieldError field={field} />
            </div>
          )}
        </form.Field>

        {/* Email */}
        <form.Field
          name='email'
          validators={{
            onBlur: ({ value }) => {
              if (!value.trim()) return 'Email is required';
              if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email';
              return undefined;
            }
          }}
        >
          {field => (
            <div className='form-field'>
              <label htmlFor={field.name}>Email</label>
              <input
                id={field.name}
                placeholder='Enter your email'
                type='email'
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
              />
              <FieldError field={field} />
            </div>
          )}
        </form.Field>
      </div>

      {/* Message */}
      <form.Field
        name='message'
        validators={{
          onBlur: ({ value }) =>
            !value.trim()
              ? 'Message is required'
              : value.trim().length < 10
                ? 'Message must be at least 10 characters'
                : undefined
        }}
      >
        {field => (
          <div className='form-field'>
            <label htmlFor={field.name}>Message</label>
            <textarea
              id={field.name}
              placeholder='How can I help you?'
              rows='4'
              value={field.state.value}
              onChange={e => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
            />
            <FieldError field={field} />
          </div>
        )}
      </form.Field>

      {/* Submit */}
      <form.Subscribe selector={state => state.isSubmitting}>
        {isSubmitting => (
          <button
            type='submit'
            disabled={isSubmitting}
            className='bg-accent hover:bg-accent-dark w-full cursor-pointer rounded-xl px-6 py-4 font-medium text-white disabled:cursor-not-allowed disabled:opacity-60'
          >
            {isSubmitting ? 'Sending…' : 'Send Message'}
          </button>
        )}
      </form.Subscribe>
    </form>
  );
}
