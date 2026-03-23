import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_h6dckl7';
const APPLICANT_TEMPLATE_ID = 'template_zvyvy1p'; // confirmation sent to recruit
const TEAM_TEMPLATE_ID = 'template_t74c05d';      // notification sent to your inbox
const PUBLIC_KEY = 'vTM5LTV6hviy4vpuc';

async function saveToDatabase(form) {
  const res = await fetch('/api/submit-application', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || `HTTP ${res.status}`);
  }

  return res.json();
}

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

  // Run DB save and email in parallel. A DB failure logs a warning but
  // doesn't block the confirmation email from reaching the applicant.
  const [dbResult, emailResult] = await Promise.allSettled([
    saveToDatabase(form),
    Promise.all([
      emailjs.send(SERVICE_ID, APPLICANT_TEMPLATE_ID, templateParams, PUBLIC_KEY),
      emailjs.send(SERVICE_ID, TEAM_TEMPLATE_ID, templateParams, PUBLIC_KEY),
    ]),
  ]);

  if (dbResult.status === 'rejected') {
    console.warn('[emailService] DB save failed (non-fatal):', dbResult.reason);
  }

  if (emailResult.status === 'rejected') {
    throw emailResult.reason;
  }
}
