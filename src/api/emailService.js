import emailjs from '@emailjs/browser';

// Replace these with your EmailJS credentials
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export async function sendApplicationEmail(form) {
  const templateParams = {
    from_name: form.fullName,
    from_email: form.email,
    phone: form.phone,
    state: form.state,
    licensed: form.licensed,
    experience: form.experience,
    instagram: form.instagram || 'Not provided',
    message: form.message || '',
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
}
