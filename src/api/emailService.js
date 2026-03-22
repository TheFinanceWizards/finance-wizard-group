import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_zlc1mm4';
const APPLICANT_TEMPLATE_ID = 'template_zvyvy1p'; // confirmation sent to recruit
const TEAM_TEMPLATE_ID = 'template_t74c05d';      // notification sent to your inbox
const PUBLIC_KEY = 'vTM5LTV6hviy4vpuc';

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

  return Promise.all([
    emailjs.send(SERVICE_ID, APPLICANT_TEMPLATE_ID, templateParams, PUBLIC_KEY),
    emailjs.send(SERVICE_ID, TEAM_TEMPLATE_ID, templateParams, PUBLIC_KEY),
  ]);
}
